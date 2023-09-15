import React, { useState } from "react";

const PortfolioForm = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("Design"); // Initialize with the default value
  const [imagePreview, setImagePreview] = useState(null); // To store the image preview URL
  const [url, setUrl] = useState('');

  const categoryOptions = [
    "Design",
    "Website",
    "Video/Photo",
    "Digital Marketing",
  ];

  // Function to handle image selection and preview
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    if (selectedImage) {
      const previewURL = URL.createObjectURL(selectedImage);
      setImagePreview(previewURL);
    } else {
      setImagePreview(null);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("ProjectTitle", projectTitle);
      formData.append("Image", image);
      formData.append("Description", description);
      formData.append("Categories", categories);
      formData.append("URL", url); // Append the URL field to the formData
  
      const response = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        // Handle success
        console.log("Portfolio item created successfully.");
        window.alert("Portfolio item created successfully.");
        // Optionally, you can redirect to another page or perform other actions here.
      } else {
        // Handle error
        console.error("Error creating portfolio item.");
        window.alert("Error creating portfolio item.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
      window.alert("An error occurred.");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl text-white font-semibold mb-4">
        Add a New Portfolio Item
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            htmlFor="projectTitle"
            className="block text-sm font-medium text-white"
          >
            Project Title
          </label>
          <input
            type="text"
            id="projectTitle"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Enter Project Title"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-white">
            URL
          </label>
          <input
            type="url" // Use type "url" for URL input
            id="url"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-white"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            accept=".jpg, .jpeg, .png, .gif"
            className="mt-1 p-2 w-full border text-black rounded-md bg-[#A28BFF]"
            onChange={handleImageChange}
            required
          />
        </div>

        {imagePreview && (
          <div className="mb-4">
            <img
              src={imagePreview}
              alt="Image Preview"
              className="max-w-full h-auto"
            />
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="categories"
            className="block text-sm font-medium text-white"
          >
            Categories
          </label>
          <select
            id="categories"
            className="mt-1 p-2 w-full border rounded-md text-black"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            required
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioForm;
