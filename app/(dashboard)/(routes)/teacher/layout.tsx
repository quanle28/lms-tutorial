import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";

const TeacherLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const {userId } = auth();
    if (!isTeacher(userId)) {
        return redirect("/");
    }
    return <>{children}</>;
}
 
export default TeacherLayout;