import TextField from '@mui/material/TextField';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { generateCountryArray } from '@/utils/sec';
import { FormControl, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const countries = generateCountryArray();
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
  const [countryCode, setCountryCode] = useState(countries[0].code);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry.name);
    const country = countries.find(country => country.code === selectedCountry);
    setCountryCode(country.code);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    setLoading(true);

    if (!fullName || !email || !phoneNumber || !message) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    const sendMessage = () => {
      var templateParams = {
        name: fullName,
        country: selectedCountry,
        phone: `${countryCode}${phoneNumber}`,
        email,
        message
      };
   
      emailjs.send('service_oa7jnx8', 'template_hrlbv75', templateParams, 'KWdQCghzf-ziOzRMQ')
      .then((result) => {
        setSuccess('Message sent successfully');
        setLoading(false);
      }, (error) => {
        setError(error.text);
      });
    }

    try{
      sendMessage();
    } catch (err) {
      setError(err.message);
    }

    setEmail('');
    setFullName('');
    setPhoneNumber('');
    setMessage('');
  }


  return (
    <div className='formCtn'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>CONTACT ME!</h2>
        <TextField label="Full Name" variant="outlined" onChange={(e) => setFullName(e.target.value)}/>
        <TextField label="Email" type='email' variant="outlined"  onChange={(e) => setEmail(e.target.value)}/>
        <FormControl>
          <InputLabel id="Country-label">Country</InputLabel>
          <Select
            labelId="Country-label"
            id="country-select"
            defaultValue={selectedCountry}
            onChange={handleCountryChange}
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country.code}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Phone Number"
          type='number'
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={`${phoneNumber}`}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{countryCode}</InputAdornment>
            ),
          }}
        />
        <TextField label="Message" variant="outlined" multiline rows={4} onChange={(e) => setMessage(e.target.value)}/>
        {error && <p className='formError'>{error}</p>}
        {success && <p className='formSuccess'>{success}</p>}
        <button className='heroBtn' style={{width: "100%"}}>{!loading? "Send" : "loading..." }</button>
      </form>
    </div>
  )
}
