import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useForm } from 'react-hook-form';
import { auth, bucket, db } from "../../lib/firebase";



export default function NewPostForm() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { register, handleSubmit } = useForm();

  const postRef = ref(bucket,'posts/post1.png')

  async function onSubmit(values:any) {

    const storageRef = ref(bucket, `posts/post1.png`);
    const file = values.image[0]


    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!',snapshot);
    }).catch((error)=>{
      console.log(error)
    });

    const imageUrl:string = await getDownloadURL(postRef)
    console.log(imageUrl, typeof(imageUrl))

    if(auth.currentUser){
    await addDoc(collection(db, "posts"), {
      title:values.title,
      description: values.description,
      image: imageUrl,
      user: auth.currentUser.email,
    });
    console.log('uploaded succesfully')
  }
  else{
    console.log('login karke aao')
  }
  
   console.log(values)
   }
  return (
    <>
      <Button onPress={onOpen} color="primary">Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  autoFocus
                  type="file"
                  accept="image/*"
                  label="Image"
                  placeholder="Upload your Image"
                  variant="bordered"
                  {...register("image")}
                />
                <Input
                  autoFocus
                  type="text"
                  label="Title"
                  placeholder="Write a title here"
                  variant="bordered"
                  {...register("title")}
                />
                <Input
                  autoFocus
                  type="text"
                  label="Description"
                  placeholder="Write a description here"
                  variant="bordered"
                  {...register("description")}
                />
                <Button color="primary" type="submit" onPress={onClose}>
                  Upload
                </Button>
                </form>
              </ModalBody>
              <ModalFooter>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </>
  );
}
