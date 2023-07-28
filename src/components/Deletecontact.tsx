import { useDeleteContactMutation } from "../services/contactsApi";
const Deletecontact=()=>{
const contact={
"id":"5",
"name":"Taylor",
"email":"taylor@gmail.com"
}
const [deletecontact]=useDeleteContactMutation();
const deleteHandler=async()=>{
await deletecontact(contact.id);
}
return(
<>
<button onClick={deleteHandler}>Delete Contact</button>
</>
);    
}
export default Deletecontact;