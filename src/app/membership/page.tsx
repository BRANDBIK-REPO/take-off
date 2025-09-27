import MembershipForm from "@/components/membership/MembershipForm";
 


export default function Page(){
  return(
    <>
     <main className="  bg-[var(--surface)] pt-48 pb-12  ">
      <div className="mx-auto px-4 w-full max-w-[1120px]">
    <MembershipForm/>
    </div>
    </main>
    </>
  )
}