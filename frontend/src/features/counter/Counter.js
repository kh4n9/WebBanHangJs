import React from 'react' // Import thư viện React
import { useSelector, useDispatch } from 'react-redux' // Import các hook từ react-redux
import { decrement, increment } from './counterSlice' // Import các action từ counterSlice

export function Counter() {
  // Sử dụng useSelector để lấy giá trị hiện tại của bộ đếm từ Redux store
  const count = useSelector((state) => state.counter.value)
  // Sử dụng useDispatch để tạo một hàm dispatch
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        {/* Nút để tăng giá trị bộ đếm */}
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())} // Gửi action increment khi nhấn
        >
          Increment
        </button>
        {/* Hiển thị giá trị hiện tại của bộ đếm */}
        <span>{count}</span>
        {/* Nút để giảm giá trị bộ đếm */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())} // Gửi action decrement khi nhấn
        >
          Decrement
        </button>
      </div>
    </div>
  )
}