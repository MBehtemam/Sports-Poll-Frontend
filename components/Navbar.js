import Link from "next/link";
import NavbarStyled from "./styles/Navbar.styled";
import SingOut from "./SignOut";

const Navbar = ({ isLoggedIn, isAdmin, user }) =>
  isLoggedIn ? (
    <NavbarStyled>
      <Link href="/account">
        <a>Account</a>
      </Link>
      {isAdmin && (
        <Link href="/admin">
          <a>Admin Panel</a>
        </Link>
      )}
      <Link href="/statics">
        <a>Statics</a>
      </Link>
      <SingOut />
    </NavbarStyled>
  ) : (
    <NavbarStyled>
      <Link href="/signup">
        <a>Sing In</a>
      </Link>
    </NavbarStyled>
  );
export default Navbar;
