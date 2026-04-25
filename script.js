// 添加客服按钮
const btnLotteryNew = document.querySelector('.btn-lottery-new');
if (btnLotteryNew) {
    btnLotteryNew.addEventListener('click', () => {
        alert('🎊 恭喜您！\n\n请添加客服微信参与抽奖：\n\n微信号：dorajiepw\n\n添加后发送"抽奖"即可参与\n100%中奖，先到先得！');
    });
}

// 快捷分类按钮交互
document.querySelectorAll('.quick-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.quick-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// 搜索框交互
const searchInput = document.querySelector('.search-input');
const searchHeroBtn = document.querySelector('.btn-search-hero');

if (searchHeroBtn) {
    searchHeroBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        if (searchTerm) {
            alert(`搜索功能开发中\n您搜索的是: ${searchTerm}`);
        } else {
            alert('请输入搜索内容');
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchHeroBtn.click();
        }
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// 卡片动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.event-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// 预订按钮交互
document.querySelectorAll('.btn-book').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = button.closest('.event-card');
        const eventName = card.querySelector('h3').textContent;
        
        // 添加点击动画
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // 模拟咨询客服
        alert(`咨询活动: ${eventName}\n\n客服微信：dorajiepw\n客服电话：400-888-8888\n\n工作时间：9:00-21:00`);
    });
});

// 搜索按钮
const btnSearch = document.querySelector('.btn-search');
if (btnSearch) {
    btnSearch.addEventListener('click', () => {
        const searchTerm = prompt('请输入搜索内容：');
        if (searchTerm) {
            alert(`搜索功能开发中\n您搜索的是: ${searchTerm}`);
        }
    });
}

// 登录按钮
const btnLogin = document.querySelector('.btn-login');
if (btnLogin) {
    btnLogin.addEventListener('click', () => {
        alert('登录功能开发中，敬请期待！');
    });
}


// AI音乐生成功能
const btnGenerateMusic = document.getElementById('btn-generate-music');
const musicResult = document.getElementById('music-result');
const musicPrompt = document.getElementById('music-prompt');
const musicStyle = document.getElementById('music-style');
const musicMood = document.getElementById('music-mood');

if (btnGenerateMusic) {
    btnGenerateMusic.addEventListener('click', () => {
        const prompt = musicPrompt.value.trim();
        const style = musicStyle.value;
        const mood = musicMood.value;

        if (!prompt) {
            alert('请输入音乐描述');
            return;
        }

        // 显示加载状态
        btnGenerateMusic.innerHTML = '<span class="btn-icon">⏳</span><span>生成中...</span>';
        btnGenerateMusic.disabled = true;

        // 模拟API调用（这里可以替换为实际的API接口）
        setTimeout(() => {
            // 显示结果
            musicResult.style.display = 'block';
            musicResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // 恢复按钮状态
            btnGenerateMusic.innerHTML = '<span class="btn-icon">✨</span><span>生成音乐</span>';
            btnGenerateMusic.disabled = false;

            // 这里可以添加实际的API调用逻辑
            console.log('生成音乐参数:', { prompt, style, mood });
        }, 2000);
    });
}

// 播放按钮
const btnPlay = document.querySelector('.btn-play');
if (btnPlay) {
    btnPlay.addEventListener('click', () => {
        if (btnPlay.textContent.includes('播放')) {
            btnPlay.textContent = '⏸️ 暂停';
            // 这里添加实际的播放逻辑
        } else {
            btnPlay.textContent = '▶️ 播放';
            // 这里添加实际的暂停逻辑
        }
    });
}

// 下载按钮
const btnDownload = document.querySelector('.btn-download');
if (btnDownload) {
    btnDownload.addEventListener('click', () => {
        alert('下载功能开发中\n\n接入API后可下载生成的音乐文件');
        // 这里添加实际的下载逻辑
    });
}
