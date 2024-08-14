import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { useState } from "react";
import manucardimg1 from "../../assets/mainpage/manucardimg1.png";
import lunch from "../../assets/mainpage/lounch1.jpg";
import dinner from "../../assets/mainpage/dinner.jpg";
import starter from "../../assets/mainpage/starter.jpg";
import bavengares from "../../assets/mainpage/baveranges.jpg";
import ManuCards from "./Manucards";
import ManuImages from "./ManuImages";

interface MenuType {
  [key: string]: { meal: string; ingredients: string; price: string }[];
}
interface HeaderItemProps {
  active?: boolean;
  onClick: () => void;
  // Add other props as needed
}
interface ImagesCardType {
  [key: string]: { img: string }[];
}
const Manus = () => {
  const [activeManu, setActiveManu] = useState("BREAKFAST");

  const handleHeaderClick = (manu: React.SetStateAction<string>) => {
    setActiveManu(manu);
  };

  const ImagesCard: ImagesCardType = {
    BREAKFAST: [{ img: manucardimg1 }],
    LUNCH: [{ img: lunch }],
    DINNER: [{ img: dinner }],
    STARTERS: [{ img: starter }],
    BEVERAGES: [{ img: bavengares }],
  };
  const ManuCard: MenuType = {
    BREAKFAST: [
      // { img: manucardimg1 },
      {
        meal: "Gazpacho Garlic",
        ingredients: "Chilled tomato, cucumber, garlic, redpepper soup.",
        price: "$55",
      },
      {
        meal: "Pan Con Berenjina Frita",
        ingredients: "Marinated seabass with sour sauce, dill & coriander on bread.",
        price: "$40",
      },
      {
        meal: "New Lubina Marinada",
        ingredients: "Fried aubergine with almond on bread (2 pieces).",
        price: "$45",
      },
      {
        meal: "Gazpacho",
        ingredients: "Atlantic cod fillet, chips, salad, tartare, lemon.",
        price: "$35",
      },
      {
        meal: "Coconut Chia Bowl",
        ingredients: "Marinated seabass with sour saucel & coriander on bread.",
        price: "$95",
      },
      {
        meal: "New Lubina Marinada",
        ingredients: "Atlantic cod fillet, chips, salad, tartare, lemon.",
        price: "$120",
      },
      {
        meal: "Gazpacho Garlic",
        ingredients: "Chilled tomato, cucumber, garlic, redpepper soup.",
        price: "$29",
      },
    ],
    LUNCH: [
      // { img: manucardimg1 },
      {
        meal: "Spaghetti Bolognese",
        ingredients:
          "Ground beef, onions, garlic, tomatoes,  Italian herbs, Parmesan cheese, and pasta",
        price: "$20",
      },
      {
        meal: "Chicken Pad Thai",
        ingredients: "Rice noodles, chicken, bean sprouts, peanuts, and Pad Thai sauce.",
        price: "$25",
      },
      {
        meal: "Margherita Pizza",
        ingredients: "Pizza dough, tomatoes, fresh mozzarella, basil, oliveoil, ",
        price: "$28",
      },
      {
        meal: "Chicken Alfredo Pasta",
        ingredients:
          " Fettuccine pasta, chicken breast, heavy cream, butter, Parmesan cheese, and garlic",
        price: "$30",
      },
      {
        meal: "Vegetable Stir-Fry",
        ingredients: " Mixed vegetables, tofu or chicken, soy sauce, ginger, and garlic.",
        price: "$12",
      },
      {
        meal: "Sushi Roll (California Roll)",
        ingredients:
          " Nori, sushi rice, imitation crab or real crab, avocado, cucumber, and soy sauce.",
        price: "$15",
      },
      {
        meal: "BBQ Pulled Pork Sandwich",
        ingredients: " Pulled pork, barbecue sauce, coleslaw, and a bun",
        price: "$15",
      },
    ],
    DINNER: [
      // { img: manucardimg1 },
      {
        meal: "Grilled Salmon with Lemon-Dill Sauce",
        ingredients: "Salmon fillets, lemon, dill, oliveoil, garlic, salt, and pepper.",
        price: "$25",
      },
      {
        meal: "Beef Stroganoff",
        ingredients:
          "Beef sirloin, mushrooms, onion, garlic, sour cream, beef broth, and egg noodles.",
        price: "$30",
      },
      {
        meal: "Vegetarian Lasagna",
        ingredients: "Lasagna noodles, mozzarella cheese, marinara sauce, spinach, and mushrooms.",
        price: "$30",
      },
      {
        meal: "Teriyaki Chicken Bowl",
        ingredients: "Chicken thighs, soy sauce, honey, ginger, garlic, rice, and vegetables.",
        price: "$19",
      },
      {
        meal: "Eggplant Parmesan",
        ingredients: "Eggplant, breadcrumbs, marinara sauce,Parmesan cheese, and basil.",
        price: "$14",
      },
      {
        meal: "Shrimp Scampi",
        ingredients: "Shrimp, garlic, whitewine, lemon, parsley, butter, and linguine.",
        price: "$28",
      },
      {
        meal: "Chicken Fajitas",
        ingredients:
          "Chicken breasts, bell peppers, onions, tortillas, sour cream, and Mexican spices.",
        price: "$33",
      },
    ],
    STARTERS: [
      // { img: manucardimg1 },
      {
        meal: "Caprese Salad",
        ingredients:
          "Fresh tomatoes, mozzarella cheese, basil, balsamic glaze, oliveoil, salt, and pepper.",
        price: "$8",
      },
      {
        meal: "Spinach and Artichoke Dip",
        ingredients:
          "Spinach, artichokes, cream cheese, sour cream, mayonnaise, garlic, and Parmesan cheese.",
        price: "$15",
      },
      {
        meal: "Bruschetta",
        ingredients: "Tomatoes, garlic, basil, oliveoil, balsamic vinegar, and baguette slices.",
        price: "$12",
      },
      {
        meal: "Stuffed Mushrooms",
        ingredients: "Mushrooms, cream cheese, breadcrumbs, garlic, parsley, and Parmesan cheese.",
        price: "$15",
      },
      {
        meal: "Shrimp Cocktail",
        ingredients: "Shrimp, cocktail sauce, lemon wedges, and parsley for garnish.",
        price: "$18",
      },
      {
        meal: "Crispy Calamari",
        ingredients: "Calamari rings, flour, cornmeal, spices, and a side of marinara sauce.",
        price: "$18",
      },
      {
        meal: "Chicken Satay Skewers",
        ingredients: "Chicken skewers, peanut sauce, soy sauce, ginger, and garlic.",
        price: "$16",
      },
    ],
    BEVERAGES: [
      // { img: manucardimg1 },
      {
        meal: "Classic Mojito",
        ingredients: "White rum, fresh lime juice, mint leaves, simple syrup, and soda water.",
        price: "$8",
      },
      {
        meal: "Mango Lassi",
        ingredients: "Mango, yogurt, milk, sugar, and a pinch of cardamom.",
        price: "$5",
      },
      {
        meal: "Iced Matcha Latte",
        ingredients: "Matcha powder, milk, ice, and sweetener (optional).",
        price: "$4",
      },
      {
        meal: "Virgin Pina Colada",
        ingredients: "Pineapple juice, coconut cream, crushed ice, and pineapple garnish.",
        price: "$10",
      },
      {
        meal: "Espresso Martini",
        ingredients: "Vodka, coffee liqueur, freshly brewed espresso, and simple syrup.",
        price: "$15",
      },
      {
        meal: "Freshly Squeezed Orange Juice",
        ingredients: "Oranges.",
        price: "$3",
      },
      {
        meal: "Cucumber Mint Cooler",
        ingredients: "Cucumber, mint leaves, limejuice, simple syrup, and soda water.",
        price: "$9",
      },
    ],
  };
  const getCardsForManu = () => {
    return ManuCard[activeManu] || [];
  };
  const getImagesCard = () => {
    return ImagesCard[activeManu] || [];
  };
  return (
    <ManuWrapper>
      <ManuContainer>
        <Wrapper>
          <h2>SPECIALS</h2>
          <h1>Check out our menu</h1>
          <p>
            Demoralized by the charms of pleasure of the moment so blinded except to some advantage.
          </p>
        </Wrapper>{" "}
        <ManuSider>
          <Header>
            {Object.keys(ManuCard).map((manu: string, index: number) => (
              <HeaderItem
                key={index}
                active={activeManu === manu}
                onClick={() => handleHeaderClick(manu)}
              >
                {manu}
              </HeaderItem>
            ))}
          </Header>
          <Div>
            <Images>
              {getImagesCard().map((card: { img: string }, index: number) => (
                <ManuImages key={`${activeManu}-${index}`} img={card.img} />
              ))}
            </Images>
            <Dishes>
              {getCardsForManu().map(
                (card: { meal: string; ingredients: string; price: string }, index: number) => (
                  <ManuCards
                    key={`${activeManu}-${index}`} // Using a unique key
                    // img={card.img}
                    meal={card.meal}
                    ingredients={card.ingredients}
                    price={card.price}
                  />
                )
              )}
            </Dishes>
          </Div>
        </ManuSider>
      </ManuContainer>
    </ManuWrapper>
  );
};
export default Manus;

const ManuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  @media (max-width: 795px) {
    padding: 8px 50px;
  }
`;

const ManuContainer = styled.div`
  /* flex-direction: column; */
`;

const ManuSider = styled.div`
  @media (max-width: 1400px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-around;
  margin-top: 20px;
`;
const Images = styled.div`
  @media (max-width: 1400px) {
    display: none;
  }
`;
const Dishes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Wrapper = styled.div`
  text-align: center;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-top: 16px;
    margin-bottom: 15px;
  }
  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 21px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1400px) {
    flex-direction: column;
    margin-right: 25px;
  }
  @media (max-width: 680px) {
    flex-direction: row;
  }
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    text-align: center;
  }
`;

const HeaderItem = styled.p<HeaderItemProps>`
  width: 300px;
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-right: 1px solid ${defaultTheme.colors.blue};
  color: ${(props) => (props.active ? defaultTheme.colors.floralwhite : defaultTheme.colors.red)};
  cursor: pointer;
  &:last-child {
    border-right: none;
  }
  ${(props) =>
    props.active
      ? `
        background-color:${defaultTheme.colors.red};
        
      `
      : ""};

  @media (max-width: 1400px) {
    border: none;
    /* border-top: 1px solid ${defaultTheme.colors.blue}; */
    border-bottom: 1px solid ${defaultTheme.colors.blue};
    margin: auto 0;
  }
  @media (max-width: 1200px) {
    width: 150px;
  }
  @media (max-width: 500px) {
    width: 120px;
    font-size: 20px;
  }
  @media (max-width: 450px) {
    width: 115px;
    font-size: 20px;
    padding: 0 10px;
  }
`;
