const ul = document.querySelector('#navul');
const alertBox = document.querySelector('.alert');
const alertX = document.querySelector('.alertx');
const ctx = document.getElementById('lineChart');
const bell = document.getElementById('bell');
const dropUl = document.querySelector('.dropdown ul');
const trafficUl = document.querySelector('.traffic-part ul');
const sendBtn = document.getElementById('sendbtn');
const toggleBtn = document.querySelectorAll('.toggle-btn');
const bottomBtns = document.querySelector('.bottombtns');
const setEmail = document.querySelector('.st1 .toggle-btn');
const setProfile = document.querySelector('.st2 .toggle-btn');
const time = document.getElementById('timezone');



//line chart arrays 

const trafficData = [
    {
        labels: ['07am', '08am', '09am', '10am', '11am', '12am', '01pm'],
        datasets: [{
            data: [14, 21, 45, 61, 30, 34, 44],
            backgroundColor: [ '#e1b382'], 
            borderColor: ['#ea8f2d'],
            borderWidth: 1,
            pointHoverBackgroundColor: '#12343B',
        }]
    },
    {
        labels: ['Jun 01', 'Jun 02', 'Jun 03', 'Jun 04', 'Jun 05', 'Jun06', 'Jun07'],
        datasets: [{
            data: [213, 190, 220, 80, 94, 311, 231],
            backgroundColor: [ '#e1b382'], 
            borderColor: ['#ea8f2d'],
            borderWidth: 1,
            pointHoverBackgroundColor: '#12343B',
        }]
    },
    {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26',
                 '27-3'],
        datasets: [{
            data: [325, 882, 403, 1076, 1800, 998, 1601],
            backgroundColor: [ '#e1b382'], 
            borderColor: ['#ea8f2d'],
            borderWidth: 1,
            pointHoverBackgroundColor: '#12343B',
        }]
    },
    {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                 'September', 'Octorber', 'November', 'December'],
        datasets: [{
            data: [1800, 2451, 3211, 2765, 2414, 3123, 1234, 2665, 3012, 2943, 2456, 1933, 3412],
            backgroundColor: [ '#e1b382'], 
            borderColor: ['#ea8f2d'],
            borderWidth: 1,
            pointHoverBackgroundColor: '#12343B',
        }]
    },
];


// change the classes in nav-bar when you click the svg

ul.addEventListener('click', (event) => {
    const pathAll = document.querySelectorAll('.st0');
    const allLi = ul.getElementsByTagName('li');    
    if(event.target.tagName == 'svg' || event.target.tagName == 'path') {
        for(let i = 0; i < pathAll.length; i++) {
            pathAll[i].classList.remove('svg-white');
            allLi[i].classList.remove('list-border');
        }

        if(event.target.parentNode.nodeName == 'LI') {
            const parentLi = event.target.parentNode; 
            const eventPath = parentLi.querySelector('.st0');
            parentLi.classList.add('list-border');
            eventPath.classList.add('svg-white');
        }
    }
    
    
});

// dropdown menu
bell.addEventListener('click', function()  {
    const dropDown = document.querySelector('.dropdown');
    const dot = document.querySelector('.dot');
    if(dropDown.id == "") {
        dropDown.setAttribute("id", 'show')
        dot.style.display = "none";  
    } else {
        dropDown.removeAttribute('id');
    }
});
// delete message inside dropdown menu
dropUl.addEventListener('click', (event) => {
    if(event.target.tagName == 'SPAN') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
});


// alert box 
alertX.addEventListener('click', function() {
    alertBox.style.display = "none";
});


// line Chart

let lineChartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    },
    animation: {
        duration: 400,
        easing: 'easeInExpo',
    },

};

const myLineChart = new Chart(ctx, {
    type: 'line',
    data: { 
        labels: trafficData[2].labels,
        datasets: trafficData[2].datasets
    },
    options: lineChartOptions,
});

let trafficDataChoose = function(number) {
    myLineChart.data.labels = trafficData[number].labels;
    myLineChart.data.datasets = trafficData[number].datasets;
    myLineChart.update();
}


trafficUl.addEventListener('click', (event) => {
    const btn = trafficUl.querySelectorAll('BUTTON');
    btn.forEach((item) => {
        item.classList.remove("clicked");
        if(event.target === item) {
            dataNum = event.target.dataset.number
            event.target.classList.add('clicked');
            trafficDataChoose(dataNum);
        }
    });
});

// Bar chart

new Chart(document.getElementById('bar-chart'), {
    type: 'bar', 
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets : [
            {
            backgroundColor: '#d5b089', 
            data: ['180', '143', '132', '154', '123', '155', '176'],
            hoverBackgroundColor: ['#dc862b'],
            hoveBorderColor: ['#545351']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
        animation: {
            duration: 350,
            easing: 'easeInOutCirc'
        }
    }
});

// Doughnut chart

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ['Phones', 'Tablets', 'Desktop'],
      datasets: [
        {
          backgroundColor: ['#264b77', '#a3acb1', '#e1b382'],
          data: [4123, 2436, 7869]
        }
      ]
    },
    options: {
      legend: {
          position: 'right',
          labels: {
            boxWidth: 20,
            padding: 15
          }
          
      },
      animation: {
          duration: 340,
          easing: 'easeInOutCubic'
      }
    }
});


// search box


var countries = [
    { label: 'Victoria Chambers ', value: 'VC' },
    { label: 'Olivier Whitmore', value: 'OW' },
    { label: 'Lucy Ball', value: 'LB' },
    { label: 'Jamaal Mann', value: 'JM' },
    { label: 'Todd Johnston', value: 'TJ' },
    { label: 'Marcel Adams', value: 'MA' },
    { label: 'Pierce Massey', value: 'PM' },
    { label: 'Yvonne Magana', value: 'YM' },
    { label: 'Amari Carroll', value: 'AC' },
    { label: 'Torin Bassett', value: 'TB' },
    { label: 'Derry Moses', value: 'DM' },
    { label: 'Syed Wallace', value: 'SW' },
];

var input = document.getElementById("searchbox");

autocomplete({
    input: input,
    minLength: 1,
    fetch: function(text, update) {
        text = text.toLowerCase();
        var suggestions = countries.filter(n => n.label.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function(item) {
        input.value = item.label;
    }
});


// message check

sendBtn.addEventListener('click', function() {
    const search = document.getElementById('searchbox').value;
    const textarea = document.getElementById('textarea').value;
    const original = sendBtn.innerHTML;
    if(search == "" && textarea == "") {
        alert('Please Fill both area to send the message.');
    } else if(search == "") {
        alert('Please Fill the User area too!');
    } else if(textarea == "") {
        alert('Please Fill the Message area too!');
    } else {
        sendBtn.innerHTML = `Message sent to ${search}`;
        setTimeout(function() {
            sendBtn.innerHTML = original;
        }, 4000)
        document.getElementById('searchbox').value = '';    
        document.getElementById('textarea').value = '';    
    }
})


// widge btn

const onOff = function(x) {
    toggleBtn[x].addEventListener('click', function()  {
        this.classList.toggle('active-btn');
        this.classList.toggle('off');
    });
};

onOff(0);
onOff(1);


// save the settings to localStorage

bottomBtns.addEventListener('click', (event) =>  {
    
    if(event.target.tagName == 'BUTTON') {
        if(event.target.classList == 'save') {
            var selectValue = time.value;
            localStorage.setItem('email', setEmail.className);
            localStorage.setItem('profile', setProfile.className);
            localStorage.setItem('time', selectValue);
        }
        if(event.target.className == 'cancel') {
            localStorage.clear();
        }
    }
})


function settings() { 
    const dispEmail = localStorage.getItem('email');
    const dispProfile = localStorage.getItem('profile');
    const dispTime = localStorage.getItem('time');
    if(dispEmail != null){
        setEmail.classList = dispEmail;
    }
    if(dispProfile != null){
        setProfile.classList = dispProfile;
    }
    if(dispTime != null){
        time.value = dispTime;
    }
}

settings();

