// import { Button } from '@nextui-org/button'
// import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal'
// import { Input } from '@nextui-org/input'
// import {useForm} from 'react-hook-form'
// import { db } from '../../lib/firebase'
// import { ref, set, get,child } from "firebase/database";
// import {auth} from '../../lib/firebase'
// import { useEffect, useState } from 'react'



// const Account = () => {
//   const [userData,setUserData] = useState({bio: "Developer", username: "Dhruv"})
//   const {isOpen, onOpen, onOpenChange} = useDisclosure();
//   const { register, handleSubmit } = useForm();
//   useEffect(()=>{
//     async function getUserData(){
//      await get(child(ref(db), `users/${auth.currentUser?.uid}`)).then((snapshot) => {
//       if (snapshot.exists()) {
//         return snapshot.val()
//         } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
//   }
//   const userData:any = getUserData()
//     setUserData({
//       username:userData.username,
//       bio:userData.val().bio
//     })
  
//   },[])
 
//   async function onSubmit(values:any) {
//       set(ref(db, 'users/' + auth.currentUser?.uid), {
//         username: values.name,
//         bio: values.bio
//       });
    
//   }

//   return (
//     <>
//       <h1> Name: {userData.username}</h1>
//       <h1> Bio: {userData.bio}</h1>
//       <p> profile image: </p>

//       <Button onPress={onOpen} color="primary">Open Modal</Button>
//       <Modal 
//         isOpen={isOpen} 
//         onOpenChange={onOpenChange}
//         placement="top-center"
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
//               <ModalBody>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <Input
//                   autoFocus
//                   type="text"
              
//                   label="Name"
//                   placeholder="Enter Your Name"
//                   variant="bordered"
//                   {...register("name")}
//                 />
//                 <Input
//                   autoFocus
//                   type="text"
              
//                   label="Bio"
//                   placeholder="Enter Your Bio"
//                   variant="bordered"
//                   {...register("bio")}
//                 />
//                 <Button color="primary" type="submit" onPress={onClose}>
//                   Upload
//                 </Button>
//                 </form>
//               </ModalBody>
//               <ModalFooter>
                
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>


//   )
// }

// export default Account



const Account = () => {
  return (
    <div>Account</div>
  )
}

export default Account