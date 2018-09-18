import React from 'react';
import styled from 'styled-components'

const SniRoot = styled.figure`
  background-color: #fff;
  color: #444;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  margin: 8px;
  max-width: 315px;
  min-width: 230px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
  max-height: 220px;

  & * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.45s ease;
    transition: all 0.45s ease;
  }

  &:after {
    background-color: #867e7e;
    height: 150%;
    bottom: -145%;
    content: '';
    left: 0;
    right: 0;
    position: absolute;
    -webkit-transition: all 0.5s linear;
    transition: all 0.5s linear;
  }

  &:hover > img,
  &.hover > img {
    opacity: 0.1;
  }

  &:hover:after,
  &.hover:after {
    bottom: 95%;
  }
`

const SniImage = styled.img`
  vertical-align: top;
  max-width: 100%;
  backface-visibility: hidden;
`

const SniTitle = styled.h3`
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;
  font-family: 'proxima-nova', futura-pt space;
`

const SniSpan = styled.span`
  display: block;
  font-weight: 700
  font-family: 'proxima-nova', futura-pt space;
`

const SniA = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const SniFigcap = styled.figcaption`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1em;
  opacity: 0;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;

  & ::hover{
    opacity: 1;
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }

  figure:hover > & {
    opacity: 1;
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }

  figure.hover > & {
    opacity: 1;
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }
`

const TextStyle = styled.h1`
  font-family: 'proxima-nova';
  font-size: 30px;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 30px 0px 30px 0px;
`

const SnippetComponent = () => (
  <SniRoot>
    <SniImage/>
    <SniFigcap>
      <SniTitle><SniSpan></SniSpan></SniTitle>
    </SniFigcap>
    <SniA href="#"></SniA>
  </SniRoot>
);


export default SnippetComponent;
