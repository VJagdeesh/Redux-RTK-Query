import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useContactsQuery } from './services/contactsApi';
import { ContactDetails } from './components/ContactDetails';
import { Addcontact } from './components/Addcontact';
import Updatecontact from './components/Updatecontact';
import Deletecontact from './components/Deletecontact';
function App() {
const {data,error,isLoading,isFetching,isSuccess}=useContactsQuery();
  return (
    <div className="App">
    <h1>Redux RTK Query</h1>
    {isLoading && <h2>...Loading</h2>}
    {isFetching && <h2>...Fetching</h2>}
    {error && <h2>Something went wrong</h2>}
    {isSuccess && (
      <div>
      {data.map(contact=>{
      return <div key={contact.id}><span>{contact.name}</span>
      <ContactDetails id={contact.id}/>
      </div>
      })}
      </div> 
    )}
    <Addcontact/>
    <Updatecontact/>
    <Deletecontact/>
    </div>
  );
}

export default App;
