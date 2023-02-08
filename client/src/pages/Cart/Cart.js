import React, { useState } from 'react';
import styled from 'styled-components';

// 카트 컨테이너를 스타일링
const CartContainer = styled.div`
display:flex;
flex-direction: ;
justify-content: ;
width: ;
padding: ;
`;
// 아이템 컨테이너를 스타일링하기
const ItemContainer = styled.div`
  display: flex;
  justify-content: ;
  margin: ;
  width: ;
`;
// 체크박스를 스타일링하기
const CheckboxContainer = styled.div`
  display: flex;
  align-items: ;
  margin: ;
`;
//api
//1.

// const handleCart =  e => {
//     e.preventDefault();
//      axios
//       .post('http://localhost:3000/user/Cart', {
//         _id:
//         name:
//         price:
//         quantity:
//         size:
//         total_price:
//       })
//       .then(res => {
//         alert(res.message);
//         navigate('/user/Cart');
//         console.log(res);
//       })
//       .catch(error => {
//         alert(error.response.data.message);
//       });
//   };
// 2.
// class Cart extends React.Component {
//   state = {
//     items: []
//   };

//   componentDidMount() {
//     this.fetchItems();
//   }

//   fetchItems = () => {
//     fetch(`'http://localhost:5001/user/Cart'`)
//       .then(res => res.json())
//       .then(items => this.setState({ items }));
//   };

//   render() {
//     return (
//       <ul>
//         {this.state.items.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }
//쇼핑카트 구성요소
const Cart = () => {
       //카트항목 보관
  const [cart, setCart] = useState([]);
            //항목 추가
  const addItem = (item) => {
    setCart([...cart, item]);
  };
          // 항목 제거 (index?)
  const removeItem = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };
       //체크박스 기능 (index?)
  const handleCheckbox = (index) => {
      //카트 복사본만들기
    const updatedCart = [...cart];
      //항목 상태 업데이트
    updatedCart[index].isSelected = !updatedCart[index].isSelected;
    setCart(updatedCart);
  };
    //카트 항목
  const renderItems = () => {
    return cart.map((item, index) => (
      <ItemContainer key={index}>
        <div>
          <div>상품 정보: {item._id}</div>
          <div>상품: {item.name}</div>
          <div>가격: {item.price}</div>
          <div>수량: {item.quantity}</div>
          <div>사이즈: {item.size}</div>
          <div>총 금액: {item.total_price}</div>
        </div>
        <CheckboxContainer>
          <input type="checkbox" checked={item.isSelected} onChange={() => handleCheckbox(index)} />
          <button onClick={() => removeItem(index)}>Remove</button>
        </CheckboxContainer>
      </ItemContainer>
    ));
  };

  function Cart({ items }) {
    //항목중 상태 초기화
    const [selectedItems, setSelectedItems] = useState([]);
    // 확인란 변경 처리, 항목 선택 전환
    const handleCheckboxChange = (item) => {
    //선택 항목에서 제거
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((i) => i !== item));
      } else {
    //선택 항목에서 추가
        setSelectedItems([...selectedItems, item]);
      }
    };
    // 모든 항목 삭제버튼 
    const handleDelete = () => {
      setSelectedItems([]);
    };
  
    return (
      <div>
        <ul>
          {items.map((item) => (
            <li key={item}>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </li>
          ))}
        </ul>
        <button onClick={handleDelete}>Delete Selected</button>
      </div>
    );
  }
       //총결제금액
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      if (item.isSelected) {
        total += item.price * item.quantity;
      }
    });
    return total;
  };

  return (
    <CartContainer>
      <button onClick={() => addItem({ 
        _id: '',
        name: '', 
        price: '', 
        quantity: '', 
        size: '', 
        isSelected: false 
        })
        }
        >
        제품 추가 1
      </button>
      <button onClick={() => addItem({ 
        _id: '',
        name: '', 
        price: '', 
        quantity: '', 
        size: '', 
        isSelected: false 
        })
        }
        >
        제품 추가 2
      </button> 
      {renderItems()}
      <div>총 주문량: {Cart.length}</div>
      <div>총 가격: {calculateTotal()}</div>
      <button onClick={() => alert('구매를 완료 했습니다.')}>구매하기</button>
    </CartContainer>
  );

};


export default Cart;


