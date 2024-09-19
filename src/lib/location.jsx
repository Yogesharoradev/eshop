import React, { useState, useEffect } from 'react';
import { Modal, List} from 'antd';
import axios from 'axios';

const LocationSelector = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('India');

  // Fetch countries from an API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map(country => country.name.common);
        setCountries(countryNames);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsModalVisible(false);
  };

  return (
    <div className="w-full md:w-[200px] h-[50px] flex items-center justify-center rounded-lg shadow-lg px-4">
      <div onClick={showModal} className='flex flex-col justify-center items-center cursor-pointer'>
        <h1 className="text-gray-900 mt-2"> Your Location</h1>
        <span className='mb-3 text-purple-600 font-bold'>{selectedCountry}</span>
      </div>

      <Modal
        title="Select a Country"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <List 
          bordered
          dataSource={countries}
          renderItem={(country) => (
            <List.Item onClick={() => handleCountrySelect(country)}>
              {country}
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default LocationSelector;
