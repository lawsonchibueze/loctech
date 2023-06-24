
import getCurrentUser from "../actions/getCurrentUser";

export const checkCurrentUser = async () => {
  try {
    const currentUser = await getCurrentUser();
    const currentUserRole = currentUser?.role;

    if (currentUserRole !== "ADMIN") {
      return new Response(
        "You do not have the facilities to carry out this action",
        { status: 401 }
      );
    }
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};
