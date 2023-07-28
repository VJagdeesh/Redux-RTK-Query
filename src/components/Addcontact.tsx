import { useAddContactMutation, useContactsQuery } from "../services/contactsApi";

export const Addcontact=()=>{
const [addContact]=useAddContactMutation();

// const {refetch}=useContactsQuery();

const contact={
"id":"5",
"name":"Taylor",
"email":"taylor@gmail.com"
}
const addHandler=async()=>{
await addContact(contact);
// refetch();
}
return(
 <button onClick={addHandler}>Click to add!</button> 
);    
}