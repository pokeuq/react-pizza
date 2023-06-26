import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="148" r="125" /> 
    <circle cx="98" cy="106" r="3" /> 
    <rect x="0" y="294" rx="10" ry="10" width="280" height="23" /> 
    <rect x="0" y="334" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="440" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="434" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton

