// فتح أقسام المواد من الصفحة الرئيسية
function openSubject(subjectId) {
    if (subjectId === 'arabic') {
        window.location.href = 'materials/arabic/arabic.html';
    } else {
        alert('قسم ' + subjectId + ' قيد التطوير وقريباً هيكون متاح!');
    }
}

// فتح قصة معينة
function openStory(storyId) {
    window.location.href = 'story.html?id=' + storyId;
}

// العودة للصفحة الرئيسية (بنرجع خطوتين للخلف لأننا جوه materials/arabic)
function goBack() {
    window.location.href = '../../index.html';
}