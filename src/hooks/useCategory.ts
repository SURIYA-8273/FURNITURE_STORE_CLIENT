"use client";
import {
  createCategory,
  deleteCategory,
  fetchAllCategories,
  updateCategory,
} from "@/api/services/admin/category-services";
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Category {
  id: number;
  name: string;
  image: string;
  active: boolean;
  discription: string;
}

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ [key: string]: string } | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null | string>(null);
  const [active, setActive] = useState(true);
  const [id, setId] = useState<number | string | null>(null);
  const [previewURL, setPreviewURL] = useState<null | string>(null);
  const [modalState, setModalState] = useState(false);

  const handleFetchAllCategories = async () => {
    setLoading(true);
    try {
      const response = await fetchAllCategories();

      if (
        response?.status == 200 &&
        response?.data?.status &&
        response?.data?.message == "Categories retrieved successfully"
      ) {
        toast.success(response.data.message);
        setCategories(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCategory = async () => {
    const errorHandler: { [key: string]: string } = {};
    if (!name.trim()) errorHandler.name = "Enter valid name";
    if (!description.trim())
      errorHandler.description = "Enter valid description";
    if (!image) errorHandler.image = "Select image";
    console.log(errorHandler);
    if (Object.keys(errorHandler).length > 0) {
      setError(errorHandler);
      return;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("active", String(active));
      if (image) formData.append("image", image);

      const response = await createCategory(formData);

      if (
        response?.status == 201 &&
        response?.data?.status &&
        response?.data?.message == "Category created successfully"
      ) {
        setModalState(true);
        resetStates();
        toast.success(response.data.message);
        handleFetchAllCategories();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response?.status == 409 &&
          !error.response?.data?.status &&
          error.response?.data?.message == "Category name already exists"
        ) {
          toast.error(error.response.data.message);
        }
        if (
          error.status == 403
        ) {
          redirect("/auth/admin/login");
        }
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCategory = async () => {
    const errorHandler: { [key: string]: string } = {};
    if (!name.trim()) errorHandler.name = "Enter valid name";
    if (!description.trim())
      errorHandler.description = "Enter valid description";
    if (!image) errorHandler.image = "Select image";
    console.log(errorHandler);
    if (Object.keys(errorHandler).length > 0) {
      setError(errorHandler);
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("active", String(active));
      if (image) formData.append("image", image);
      if (!id) {
        return;
      }

      const response = await updateCategory(formData, id);

      if (
        response?.status == 200 &&
        response?.data?.status &&
        response?.data?.message == "Category updated successfully"
      ) {
        setModalState(true);
        resetStates();
        toast.success(response.data.message);
        handleFetchAllCategories();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);

        if (
          error.response?.status == 409 &&
          !error.response?.data?.status &&
          error.response?.data?.message == "Category name already exists"
        ) {
          toast.error(error.response.data.message);
        }
        if (
          error.response?.status == 404 &&
          !error.response?.data?.status &&
          error.response?.data?.message == "Category not found with this id"
        ) {
          toast.error(error.response.data.message);
          setModalState(true);
        }
        if (
          error.status == 403
        ) {
          redirect("/auth/admin/login");
        }
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async () => {
    setLoading(true);
    try {
      if (!id) {
        return;
      }

      const response = await deleteCategory(id);

      if (
        response?.status == 200 &&
        response?.data?.status &&
        response?.data?.message == "Category deleted successfully"
      ) {
        setModalState(true);
        toast.success(response.data.message);
        handleFetchAllCategories();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response?.status == 404 &&
          !error.response?.data?.status &&
          error.response?.data?.message == "Category not found with this id"
        ) {
          toast.error(error.response.data.message);
          setModalState(true);
        }
        if (
          error.status == 403
        ) {
          redirect("/auth/admin/login");
        }
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };




  const resetStates = () => {
    setDescription("");
    setImage(null);
    setName("");
    setPreviewURL(null);
  };

  useEffect(() => {
    handleFetchAllCategories();
  }, []);

  return {
    modalState,
    error,
    loading,
    categories,
    name,
    description,
    active,
    image,
    setImage,
    setActive,
    setName,
    setError,
    setPreviewURL,
    setDescription,
    setModalState,
    handleCreateCategory,
    handleDeleteCategory,
    handleUpdateCategory,
    id,
    setId,
    previewURL,
  };
};
