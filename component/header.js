
import logo from "./image/cryptopluslogo.png"


function Header()
{
 return(
    <>
     <nav class="navbar navbar-expand-sm fixed-top navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home"><img src={logo} alt="logo" width="80px"/> CryptoPulse </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active"  href="index.html" >Home</a>
        </li>
  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" >
          Market Trends
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Bull Market</a></li>
            <li><a class="dropdown-item" href="#" >Bear Market</a></li>
            <li><a class="dropdown-item" href="#" >Sideways Market</a></li>
            
            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" >
          Market Types
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Spot Market</a></li>
            <li><a class="dropdown-item" href="#" >Futures Market</a></li>
            <li><a class="dropdown-item" href="#" >Derivatives Market</a></li>
            
            
          </ul>
        </li>
        
        <li class="nav-item ">
          <a class="nav-link" role="button" >
          About us
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
 )
}

export default Header;