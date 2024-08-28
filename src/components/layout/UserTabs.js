export default function UserTabs({ isAdmin }) {
  return (
    <div className="flex gap-2 tabs justify-center pt-5">
      <Link className="active" href={"/profile"}>
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/menu-items"}>Menu Items</Link>
          <Link href={"/users"}>Users</Link>
        </>
      )}
    </div>
  );
}
