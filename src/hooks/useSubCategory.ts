"use client";
import {
  createCategory,
  updateCategory,
} from "@/api/services/admin/category-services";
import {
  createSubCategory,
  deleteSubCategory,
  fetchAllSubCategories,
} from "@/api/services/admin/sub-category-services";
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface SubCategory {
  id: number;
  name: string;
  image: string;
  active: boolean;
  description: string;
  optionsCount: number;
}

export const useSubCategory = () => {
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ [key: string]: string } | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null | string>(null);
  const [active, setActive] = useState(true);
  const [id, setId] = useState<number | string | null>(null);
  const [previewURL, setPreviewURL] = useState<null | string>(null);
  const [modalState, setModalState] = useState(false);

  const [optionsCount, setOptionsCount] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const handleFetchAllSubCategories = async () => {
    setLoading(true);
    try {
      const response = await fetchAllSubCategories();
      if (
        response?.status == 200 &&
        response?.data?.status &&
        response?.data?.message == "Sub categories retrieved successfully"
      ) {
        toast.success(response.data.message);
        setSubCategories(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSubCategory = async () => {
    const errorHandler: { [key: string]: string } = {};
    if (!name.trim()) errorHandler.name = "Enter valid name";
    if (!categoryId) errorHandler.categoryId = "Enter valid category id";
    if (optionsCount <= 0)
      errorHandler.optionsCount = "Enter options count above 1";
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
      formData.append("optionsCount", String(optionsCount));

      formData.append("categoryId", String(categoryId));
      formData.append("active", String(active));
      if (image) formData.append("image", image);

      const response = await createSubCategory(formData);
      console.log(response);

      if (
        (response?.status == 201 || response?.status == 200) &&
        response?.data?.status &&
        response?.data?.message == "Sub category created successfully"
      ) {
        setModalState(true);
        resetStates();
        toast.success(response.data.message);
        handleFetchAllSubCategories();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        if (
          error.response?.status == 409 &&
          !error.response?.data?.status &&
          error.response?.data?.message ==
            "Sub category already exists for this category"
        ) {
          toast.error(error.response.data.message);
        }
        if (error.status == 403) {
          redirect("/auth/admin/login");
        }
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSubCategory = async () => {
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
        handleFetchAllSubCategories();
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
        if (error.status == 403) {
          redirect("/auth/admin/login");
        }
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubCategory = async () => {
    setLoading(true);
    try {
      if (!id) {
        return;
      }

      const response = await deleteSubCategory(id);

      if (
        response?.status == 200 &&
        response?.data?.status &&
        response?.data?.message == "Sub category deleted successfully"
      ) {
        setModalState(true);
        toast.success(response.data.message);
        handleFetchAllSubCategories();
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
        if (error.status == 403) {
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
    setCategoryId(null);
    setOptionsCount(0);
  };

  useEffect(() => {
    handleFetchAllSubCategories();
  }, []);

  return {
    modalState,
    error,
    loading,
    subCategories,
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
    handleCreateSubCategory,
    handleDeleteSubCategory,
    handleUpdateSubCategory,
    id,
    setId,
    previewURL,
    optionsCount,
    setOptionsCount,
    categoryId,
    setCategoryId,
  };
};
