import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormDataType } from "./utils/DatesDataInterface";
import { deleteAllRuns } from "./utils/deleteAllRuns";
import { URL } from "./utils/URL";

interface FormProps {
  selectedDate: Date;
  setLogButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

//This component is a form that allows the user to input the data of their running activity. Once state of type RunningDataType is being managed.
export default function Form(props: FormProps): JSX.Element {
  const [formData, setFormData] = useState<FormDataType>({
    date: props.selectedDate,
    distance: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: props.selectedDate,
    }));
  }, [props.selectedDate]);

  const postFormData = async (formData: FormDataType) => {
    try {
      const response = await axios
        .post(`${URL}/runs`, formData)
        .then(() => props.setLogButtonClicked((prev) => !prev));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAllRuns = async () => {
    const response = await axios
      .delete(`${URL}/runs`)
      .then(() => props.setLogButtonClicked((prev) => !prev));
  };

  //function that handles the states of hours minutes seconds and changes them accordingly
  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postFormData(formData);
    setFormData({
      date: props.selectedDate,
      hours: 0,
      minutes: 0,
      seconds: 0,
      distance: 0,
    });
  };
  return (
    <>
      <form className="form-data" onSubmit={handleSubmitButton}>
        <label>
          Hours:
          <input
            name="hours"
            type="number"
            value={formData.hours}
            onChange={handleFormData}
          />
        </label>
        <label>
          Minutes:
          <input
            name="minutes"
            type="number"
            value={formData.minutes}
            onChange={handleFormData}
          />
        </label>
        <label>
          Seconds:
          <input
            name="seconds"
            type="number"
            value={formData.seconds}
            onChange={handleFormData}
          />
        </label>
        <label>
          Distance(km):
          <input
            name="distance"
            type="number"
            value={formData.distance}
            onChange={handleFormData}
          />
        </label>
        <button type="submit">Log Data</button>
      </form>
      <button onClick={deleteAllRuns}>Delete All Values</button>
    </>
  );
}
