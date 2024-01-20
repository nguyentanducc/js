// 1. Tạo mảng các sự kiện
function name(lab2) {
    const events = [
        [10, 'Goal'],
        [23, 'Yellow Card'],
        [35, 'Substitution'],
        // ... thêm các sự kiện khác vào đây
    ];
    
    // 2. Xóa sự kiện thẻ vàng ở phút 64
    const indexToRemove = events.findIndex(event => event[0] === 64 && event[1] === 'Yellow Card');
    if (indexToRemove !== -1) {
        events.splice(indexToRemove, 1);
    }
    
    // 3. In ra số sự kiện và tỉ lệ
    const totalEvents = events.length;
    console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${90 / totalEvents} phút`);
    
    // 4. In ra màn hình với hiệp 1 hoặc hiệp 2
    for (const [minute, action] of events) {
        const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
        console.log(`[${half}] ${minute}: ⚽ ${action}`);
    }
}  
 name('lab2');
