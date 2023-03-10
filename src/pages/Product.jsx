import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive"

const Container =styled.div``
const Wrapper=styled.div`
  padding:50px;
  display: flex;
  ${mobile({padding:"10px",flexDirection:"column"})};
`
const ImageContainer=styled.div`
  flex:1;
`
const Image=styled.img`
  width: 100%;
  height: 65vh;
  object-fit:cover;
`
const InfoContainer=styled.div`
  flex:1;
  padding:0px 50px;
  ${mobile({padding:"10px"})}
`
const Title=styled.h1`
  font-weight: 600;
`
const Description=styled.p`
  margin:20px 0px;
`
const Price=styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer=styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})};
`
const Filter=styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle=styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`
const FilterSize=styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:50%;
  ${mobile({width:"100%"})};
`
const AmountContainer=styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount=styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0 5px;
`
const Button=styled.button`
  padding: 15px;
  border:2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #f8f4f4;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <ImageContainer>
          <Image src="https://th.bing.com/th/id/OIP.KZrusAcH-CaoVOCVVMDE9wAAAA?w=198&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        </ImageContainer>
        <InfoContainer>
          <Title>
            Nokia Battery
          </Title>
          <Description>
            This is description about product..!!
            The Nokia 1020mAh battery is a powerful Li-Ion battery that has a voltage of 3.7V.
            It is always recommended using original batteries as they do not explode on continuous use.
            If you use your Nokia smartphone for various tasks like playing games, listening to music 
            or for watching videos, then this Nokia battery can come to your aid.<br/>
            Batteries : 5 AA batteries required. (included)<br/>
            Item model number : BL-5C<br/>
            Model : BL-5C<br/>
            Product Dimensions : 10.9 x 9.7 x 0.4 cm; 20 Grams
          </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color </FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="darkblue"/>
              <FilterColor color="gray"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon/>
              <Amount>1</Amount>
              <AddIcon/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
