"use server";
import { signIn,signOut } from "@/lib/auth"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const login = async (provider:string) => {
    console.log('login')
   const data= await signIn(provider,{redirectTo: '/'});
   revalidatePath('/')
    

    
   
    

    
    

};


// export const login: GetServerSideProps = async (context) => {
//     const session = await getSession(context);
  
//     // If there's no active session, redirect the user to the sign-in page
//     if (!session) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false, g 
//         },
//       };
//     }
  
//     return {
//       props: {},
//     };
//   };

export const logout = async (provider:String) => {
    await signOut({redirectTo: '/'});
    revalidatePath('/')
}



//   export const handleSignIn = async (e) => {
//     const router = useRouter();
    
//     const handleSignInFunction = async (e) => {
//         e.preventDefault(); // Prevent the default form submission
//         const result = await signIn("google"); // Attempt to sign in
//         if (result?.ok) { // Check if signIn was successful
//           router.push('/hero'); // Step 3: Navigate to the "hero" page
//         } else {
//           // Handle sign in failure (optional)
//           console.error('Failed to sign in');
//         }
//       };

//   }

// export const handleSignIn =  () => {
//     const router = useRouter();
//     const handleSignInPage = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     try {
//       await login("google");
//       router.push("/");
//     } catch (error) {
//       console.error("Failed to sign in:", error);
//     }
// }
// }