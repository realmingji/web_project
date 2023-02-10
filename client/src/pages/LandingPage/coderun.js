function SliderItem() {
    const productId = [1, 2, 3];
  
    const [item, setItem] = useState([]);
    return (
      <div>
        {

              axios.get(`http://localhost:5001/product/${productId}`).then(res => {
              setItem(res.data);
                });
              return <SubCardBox>
              <ItemImg alt="SliderItem" src={`http://localhost:5001/uploads/1.png`} />
              <p>{item.name}&nbsp;&nbsp;&nbsp;&nbsp;{item.price} KRW</p>
          </SubCardBox>

        }
        {

axios.get(`http://localhost:5001/product/2`).then(res => {
setItem(res.data);
  });
return <SubCardBox>
<ItemImg alt="SliderItem" src={`http://localhost:5001/uploads/1.png`} />
<p>{item.name}&nbsp;&nbsp;&nbsp;&nbsp;{item.price} KRW</p>
</SubCardBox>

}
{

axios.get(`http://localhost:5001/product/3`).then(res => {
setItem(res.data);
  });
return <SubCardBox>
<ItemImg alt="SliderItem" src={`http://localhost:5001/uploads/1.png`} />
<p>{item.name}&nbsp;&nbsp;&nbsp;&nbsp;{item.price} KRW</p>
</SubCardBox>

}
      </div>
    );
  }
