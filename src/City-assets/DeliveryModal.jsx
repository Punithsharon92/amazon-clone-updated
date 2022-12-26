import Modal from "../Modal/Modal";

function DeliveryModal(props) {
  return (
    <Modal>
      <div className='deliveryModal'>
        <label className='deliveryModal__label'>
          Enter an Indian Postal Code :{" "}
        </label>
        <input
          type='text'
          className='deliveryModal__input'
          onChange={props.onHandleDelivery}></input>

        <button className='deliveryModal__btn' onClick={props.onDeliveryClick}>
          Submit
        </button>
        <button className='deliveryModal__btn' onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default DeliveryModal;
