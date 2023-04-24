import React from 'react';
import styled from 'styled-components';
import {usePathname} from 'next/navigation';
import Link,{ LinkProps } from 'next/link';

type Props = {
    children: React.ReactNode;
} & LinkProps

const ActiveLink = ({children,href}:Props) => {
  const pathaname = usePathname();
  const isCurrentPath = pathaname === href;
  
  return (
    <Container isActive={isCurrentPath} href={href}>
      {children}
    </Container>
  )
}

type PropsStyle = {
  isActive: boolean;
} & Props

const Container = styled(Link)<PropsStyle>`
 text-decoration: none;
 font-weight: 600;
 color: ${({isActive,theme})=> isActive?theme.colors.details.primary:theme.colors.text.secondary.dark};
 cursor: pointer;
`;

export default ActiveLink
