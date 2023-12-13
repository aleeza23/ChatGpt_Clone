import React, {useState} from "react";
import DashboardLayout from "../../dashboard layout/DashboardLayout";
import {RxCross1} from "react-icons/rx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  const [tagVal, settagVal] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, settags] = useState([]);

  const addTag = (e) => {
    if (e.code === "Enter" && tagVal) {
      settags([...tags, tagVal]);
      settagVal("");
    }
  };

  
  return (
    <>
      <DashboardLayout>
        <div className=' mx-auto font-text-family '>
          <div className='mb-5'>
            <label
              for='base-input'
              className='block mb-2 text-xl font-bold text-black'
            >
              Seo Title
            </label>
            <input
              placeholder='Seo Title'
              type='text'
              id='base-input'
              className='focus:outline-0 border border-light-blue-color focus:border-blue-color text-gray-900 text-sm rounded-lg block w-full p-2.5 '
            />
          </div>
          <div className='mb-5'>
            <label
              for='base-input'
              className='block mb-2 text-xl font-bold text-black'
            >
              Description
            </label>
            <textarea
              className=' border border-light-blue-color focus:outline-0 focus:border-blue-color  rounded-lg block w-full p-2.5'
              placeholder='Description'
              rows={"4"}
              type='text'
              id='base-input'
            />
          </div>
          <div className='mb-3'>
            <label
              className='block mb-2 text-xl font-bold text-black'
              for='file_input'
            >
              Upload file
            </label>
            <input
              className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg  cursor-pointer'
              aria-describedby='file_input_help'
              id='file_input'
              type='file'
            />
            <p
              className='mt-1 text-sm text-gray-500 dark:text-gray-300 ms-1'
              id='file_input_help'
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>
          <div className=' mb-10 sm:mb-5 h-52'>
            <ReactQuill
              theme='snow'
              className='h-40 font-bold'
              value={desc}
              onChange={setDesc}
            />
          </div>
          <div className='mb-5 '>
            <label
              for='countries'
              className='block mb-2 text-xl font-bold text-black'
            >
              Categories
            </label>
            <select
              id='countries'
              className=' border border-light-blue-color focus:border-blue-color text-gray-900 text-sm rounded-lg block w-full p-2.5'
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>

          <div className='mb-5'>
            <label
              for='base-input'
              className='block mb-2 text-xl font-bold text-black'
            >
              Popular Tags
            </label>
            <div className=' border font-text-family border-light-blue-color focus:border-blue-color text-gray-900 text-sm rounded-lg block w-full p-2 '>
              {tags.map((currElm, index) => (
                <button
                  key={index}
                  className='me-2 bg-secandory-color px-2 py-1 rounded-full   '
                >
                  {currElm}
                  <RxCross1 className='bg-primary-color rounded-full w-5 h-5  p-1 ms-1  text-white inline-block ' />{" "}
                </button>
              ))}
              <input
                onKeyDown={addTag}
                value={tagVal}
                onChange={(e) => settagVal(e.target.value)}
                placeholder='Tags'
                type='text'
                id='base-input'
                className='focus:outline-0 bg-transparent'
              />
            </div>
          </div>

          <button className="bg-primary-color py-2 px-5 text-white rounded mt-5">Submit</button>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AddBlog;
