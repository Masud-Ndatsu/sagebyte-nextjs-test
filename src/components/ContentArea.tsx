"use client";

import { useState } from "react";
interface ResponsiveStateProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  setIsMobile: (value: boolean) => void;
  setIsMenuOpen: (value: boolean) => void;
}
const ContentArea = ({}: ResponsiveStateProps) => {
  // State for form fields
  const [formData, setFormData] = useState({
    client: "Nike",
    division: "Marketing Division",
    campaignType: "Digital Campaigns",
    objective: "Product Launch",
    mediaPlanName: "Spring Collection Launch 2025",
    manager: "Kari Roida",
    currency: "EUR",
    budgetCategory: "Tooling",
    budgetType: "percentage", // Default to percentage
    budgetValue: "15%",
  });

  // Handle select field changes
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle radio button changes
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      budgetType: id === "fix-amount" ? "fix-amount" : "percentage",
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex-[4] bg-gray-100 text-gray-800 flex flex-col">
      <section className="flex-grow bg-gray-100 py-10 px-9">
        <header>
          <h2 className="text-2xl font-bold">Set up your new campaign</h2>
          <p className="max-w-[992px] my-4">
            Fill in the following information to define the foundation of your
            media plan. This information helps structure your campaign strategy
            and align with business goals.
          </p>
        </header>
        <form onSubmit={handleSubmit}>
          {/* Client Section */}
          <h2 className="text-lg font-bold mt-8 mb-4">Client Section</h2>
          <div>
            <div className="mb-4">
              <select
                name="client"
                value={formData.client}
                onChange={handleSelectChange}
                className="select bg-white w-full max-w-xs border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option disabled hidden>
                  Select Client
                </option>
                <option>Nike</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <select
                name="division"
                value={formData.division}
                onChange={handleSelectChange}
                className="select bg-white w-full max-w-xs border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option disabled hidden>
                  Select Division
                </option>
                <option>Marketing Division</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select
                name="campaignType"
                value={formData.campaignType}
                onChange={handleSelectChange}
                className="select bg-white w-full max-w-xs border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option disabled hidden>
                  Select Campaign Type
                </option>
                <option>Digital Campaigns</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select
                name="objective"
                value={formData.objective}
                onChange={handleSelectChange}
                className="select bg-white w-full max-w-xs border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option disabled hidden>
                  Select Objective
                </option>
                <option>Product Launch</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>

          {/* Media Plan Details */}
          <div>
            <h2 className="text-lg font-bold mt-8 mb-4">Media Plan Details</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <select
                name="mediaPlanName"
                value={formData.mediaPlanName}
                onChange={handleSelectChange}
                className="select bg-white w-full max-w-xs border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option disabled hidden>
                  Select Media Plan Name
                </option>
                <option>Spring Collection Launch 2025</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select
                name="manager"
                value={formData.manager}
                onChange={handleSelectChange}
                className="select bg-white w-full max-w-xs border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option disabled hidden>
                  Select Manager
                </option>
                <option>Kari Roida</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>

          {/* Budget Details */}
          <div>
            <h2 className="text-lg font-bold mt-8 mb-4">Budget Details</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <select
                name="currency"
                value={formData.currency}
                onChange={handleSelectChange}
                className="select bg-white w-full max-w-xs border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option disabled hidden>
                  Select Currency
                </option>
                <option>EUR</option>
                <option>USD</option>
                <option>GBP</option>
              </select>
              <select
                name="budgetCategory"
                value={formData.budgetCategory}
                onChange={handleSelectChange}
                className="select  bg-white w-full max-w-xs border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option disabled hidden>
                  Select Budget Category
                </option>
                <option>Tooling</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <label htmlFor="fix-amount" className="flex items-center gap-2">
                <input
                  id="fix-amount"
                  type="radio"
                  name="budgetType"
                  checked={formData.budgetType === "fix-amount"}
                  onChange={handleRadioChange}
                  className="radio radio-primary"
                />
                Fix amount
              </label>
              <label htmlFor="percentage" className="flex items-center gap-2">
                <input
                  id="percentage"
                  type="radio"
                  name="budgetType"
                  checked={formData.budgetType === "percentage"}
                  onChange={handleRadioChange}
                  className="radio radio-primary"
                />
                Percentage
              </label>
            </div>
            <div>
              <select
                name="budgetValue"
                value={formData.budgetValue}
                onChange={handleSelectChange}
                className="select bg-white w-full max-w-xs border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option disabled hidden>
                  Select Budget Value
                </option>
                <option>15%</option>
                <option>20%</option>
                <option>25%</option>
              </select>
            </div>
          </div>
        </form>
      </section>
      <div className="py-4 bg-white flex items-center justify-end">
        <button className="py-4 px-8 border-none rounded-lg bg-blue-600 font-bold text-white">
          Start creating
        </button>
      </div>
    </div>
  );
};

export default ContentArea;
