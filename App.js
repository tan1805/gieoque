import React from 'react'
import "./App.css"

function App() {
  return (

    <div className='container'>
      <div className='head'>
      <h1>THAM GIA CỘNG ĐỒNG</h1>
      </div>
      <div className='middle'>
        <div>
        <h2>Con hãy thành tâm nghĩ về câu hỏi </h2>
      <select>
        <option>Chọn chủ đề quan tâm</option>
        <option value="money">Tiền Bạc</option>
        <option value="love">Tình Duyên</option>
        <option value="finding_love">Cầu Duyên</option>
        <option value="having_more_kids">Cầu Tự</option>
        <option value="brotherhood">Quan Hệ Với Anh Chị Em</option>
        <option value="parents">Quan Hệ Với Bố Mẹ</option>
        <option value="friends">Quan Hệ Với Bạn Bè</option>
        <option value="career">Công Danh, Sự Nghiệp</option>
        <option value="healthy">Sức Khỏe</option>
        <option value="children">Con Cái</option>
        <option value="buying_real_estate">Mua Nhà Đất</option>
        <option value="studying">Học Hành</option>
      </select>
      </div>
      <div>
        <h3>và</h3>
      </div>
      </div>
      <div className='circle'>
        gieo quẻ
      </div>
    </div>

  )
}

export default App
