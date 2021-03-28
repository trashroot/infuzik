var p = MindFusion.Scheduling;

// create a new instance of the calendar
calendar = new p.Calendar(document.getElementById("calendar"));
var appTheme = 'peach';
calendar.theme = appTheme;

calendar.selectionEnd.addEventListener(handleSelectionEnd);
calendar.headerClick.addEventListener(headerHeaderClick);
// calendar.currentView = p.CalendarView.Month;
calendar.monthSettings.showPaddingDays = false

console.log(calendar);
calendar.render();

function handleSelectionEnd(sender, args){   
    if(sender.currentView == p.CalendarView.SingleMonth){
        args.cancle = true;
        var start = args.startTime;
        var end = args.endTime;
        sender.timetableSettings.dates.clear();
        while(start < end){
            sender.timetableSettings.dates.add(start);
            start = p.DateTime.addDays(start, 1);
        }

        sender.currentView = p.CalendarView.Timetable;
    }
}

function headerHeaderClick(sender, args){
    if(sender.currentView == p.CalendarView.Timetable){
        sender.date = sender.timetableSettings.dates.items()[0];
        sender.currentView = p.CalendarView.SingleMonth;
    }
}