import axios from "axios";
import React, { useState, useEffect } from "react";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [apiData, setApiData] = useState([]);

  const postData = () => {
    axios
      .post(`https://66004053df565f1a614601ee.mockapi.io/fakeData`, {
        firstName,
        lastName,
        checkbox,
      })
      .then((response) => {
        console.log(response.data); // Assuming the API returns some data
        setFirstName("");
        setLastName("");
        setCheckbox(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    axios
      .get("https://66004053df565f1a614601ee.mockapi.io/fakeData")
      .then((apiRes) => {
        setApiData(apiRes.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />
          <span>I agree to the Terms and Conditions</span>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{checkbox ? "Agreed" : "Not Agreed"}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checked</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((userdata) => (
            <tr>
              <td>{userdata.firstName}</td>
              <td>{userdata.lastName}</td>
              <td>{userdata.checkbox ? "Checked" : "Unchecked"}</td>
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Create;
