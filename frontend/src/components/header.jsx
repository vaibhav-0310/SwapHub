import React from 'react'; 
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import Search from './search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="border-t border-b border-gray-200 py-2">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <p className="text-sm text-gray-700 font-[500]">
                Get Best Valentine offers, sale on new items
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link to="/help-center" className="text-[12px] font-[500] transition hover:text-[#3E5386]">
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/order-tracking" className="text-[12px] font-[500] transition hover:text-[#3E5386]">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Main Section */}
      <div className="header bg-[#F2F2F2]">
        <div className="container flex items-center justify-between py-2 gap-x-6">
          
          {/* Logo */}
          <div className="col1">
            <Link to="/">
              <img src="/assets/icons/logo.png" alt="logo" className="w-20 h-16 rounded-full object-cover"/>
            </Link>
          </div>

          {/* Search Bar (Ensured in One Line) */}
          <div className="col2 w-[40%]">
            <Search />
          </div>

          {/* Buttons & Icons */}
          <div className="col3 w-[35%] flex items-center justify-end space-x-4">
                <ul className="flex items-center justify-start gap-4">
                <li className='flex gap-1'>
            {/* Sign-in & Sign-up */}
                <Link to="/login">
                <Button className="!bg-[#ea683d] !text-white !font-bold !py-2 !px-6 !rounded-full !shadow-md hover:!bg-[#BB4F2D] hover:!shadow-lg !transition-all">
                login
            </Button>
            </Link>
            
        </li>

        <li>
            {/* Shopping Cart */}
            <Tooltip title="Shopping Cart">
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                <MdOutlineShoppingCart />
                </StyledBadge>
            </IconButton>
            </Tooltip>
        </li>

        <li>
            {/* Wishlist (Heart Icon - Orange Red) */}
            <Tooltip title="Wishlist">
            <IconButton aria-label="wishlist">
                <StyledBadge badgeContent={4} color="secondary">
                <FaHeart className="text-[#FF4500]" />
                </StyledBadge>
            </IconButton>
            </Tooltip>
        </li>
        </ul>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
