import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }


    const store = await prismadb.store.findFirst({
        where: {
            userId
        }
    });

    if (store) { //if the store exists, we are going to redirect to that storeid
        redirect(`/${store.id}`);
    }

    return (
        <>
            {children}
        </>
    );
}

