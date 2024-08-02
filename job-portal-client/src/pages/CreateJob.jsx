import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => { 
    data.skills = selectedOption ? selectedOption.map(option => option.value) : [];
    fetch("http://localhost:3000/post-job", {
       method: "POST",
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data) 
    }).then(res => res.json()).then((result) => {
      console.log(result);
      if (result.acknowledged) {
        alert("Job Posted Successfully!!!");
      } else {
        alert("Failed to post job. Try again later.");
      }
      reset();
    });
  };

  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "Python", label: "Python" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* 1st row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job title</label>
              <input
                type="text"
                defaultValue="Web developer"
                {...register("jobTitle")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minSalary")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxSalary")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your salary type</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: Himachal"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience</label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value="">Choose your experience level</option>
                <option value="NoExperience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="WorkRemotely">Work Remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label className="block mb-2 text-lg">Required Skill set</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* 6th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your company logo URL: https://weshare.com/"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select {...register("employmentType")} className="create-job-input">
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={6}
              defaultValue="Write about your Job Description"
              placeholder="Job Description"
              {...register("description")}
            />
          </div>

          {/* Last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="email"
              placeholder="Your email"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input type="submit" className="block mt-12 bg-blue-700 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" />
        </form>
      </div>
    </div>
  );
}

export default CreateJob;
