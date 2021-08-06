import Link from 'next/link'
import styled, { css } from 'styled-components'

const BrowseLink = css`
    border-radius: 3px;
    color: #004BA8;
    background: #004BA8;
    padding: 10px 15px;
    color: #fff;
    font-size: .8rem;
    border-radius: 7px;
  &:hover {
    border: 1px solid #004BA8;
    color: #004BA8;
    background:transparent;
`

const RegisterLink = css`
  border: 1px solid #004BA8;
  border-radius: 1px;
  padding: 10px 15px;
  font-size: .7rem;
  color: #004BA8;
  background: #fff;
  &:hover {
    border: 1px solid transparent;
    color: #fff;
    background: #004BA8;
  }
`



const getButtonStyles = props => {
    if (props.isBrowse) {
      return BrowseLink;
    }
  
    return props.isRegisterLink ? RegisterLink : CustomLink;

    
  };

// This creates a custom component that wraps an <a> tag
const CustomLink = styled.a`
  text-decoration: none !important;
 
  transition: all .3s ease-in;

  ${getButtonStyles}
  
`

export const NavLink = ({ href, name, ...props }) => {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <CustomLink {...props}>{name}</CustomLink>
    </Link>
  )
}



