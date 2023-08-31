import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { countries } from '@/utils/sec';
import { InputAdornment} from '@mui/material';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('none');
  const [countryCode, setCountryCode] = useState(countries[0].code);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



  const handleCountryChange = (e) => {
    const country = countries.find(cty => cty.code === e.target.value)
    setSelectedCountry(country.name);
    setCountryCode(country.code);
  }




  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    
    if (fullName.length <3 || !email.includes('@') || email.length <7 
    || phoneNumber.length <3 || message.length <3 || selectedCountry === 'none')
      return setError('Enter all fields properly...');
    
    const contactDetails = {
      name: fullName,
      country: selectedCountry,
      phone: `${countryCode}${phoneNumber}`,
      email, message
    };
    
    try{
      setLoading(true);

      const res = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contactDetails),
      })
    
      const data = await res.json()
      if(res.ok) setSuccess('Mail Sent Successfully')
      else throw new Error(data.message)
    } catch (error) { setError(error.message) }

    setLoading(false)
    setEmail('');
    setFullName('');
    setPhoneNumber('');
    setMessage('');
    setSelectedCountry('none')
  }


  return (
    <div className='formCtn'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>CONTACT ME!</h2>
        <TextField value={fullName} label="Full Name" variant="outlined" onChange={(e) => setFullName(e.target.value)}/>
        <TextField value={email} label="Email" type='email' variant="outlined"  onChange={(e) => setEmail(e.target.value)}/>

        <select value={countryCode} onChange={handleCountryChange}>
            <option value='none'>Select Country</option>
            {countries.map((country, i) => (
              <option key={i} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>

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
        <TextField value={message} label="Message" variant="outlined" multiline rows={4} onChange={(e) => setMessage(e.target.value)}/>
        {error && <p className='formError'>{error}</p>}
        {success && <p className='formSuccess'>{success}</p>}
        <button className='heroBtn' style={{width: "100%"}}>{!loading? "Send" : "loading..." }</button>
      </form>
    </div>
  )
}
