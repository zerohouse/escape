Array.prototype.contains = function (item) {
    return this.indexOf(item) != -1;
};

Array.prototype.remove = function (val, con) {
    if (con)
        if (!confirm('삭제하시겠습니까?'))
            return;
    this.splice(this.indexOf(val), 1);
};

Array.prototype.toggle = function (item) {
    if (this.contains(item)) {
        this.remove(item);
        return;
    }
    this.push(item);
};

String.prototype.toDateString = function () {
    return new Date(this.toString()).toShowString();
};
Date.prototype.toDateString = function () {
    return this.toShowString();
};


Date.prototype.toAmPm = function () {
    var hours = this.getHours();
    var minutes = this.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ampm;
};

Date.prototype.toTime = function () {
    var hours = this.getHours();
    var minutes = this.getMinutes();
    if (minutes < 10)
        minutes = "0" + minutes;
    if (hours < 10)
        hours = "0" + hours;
    return hours + ':' + minutes;
};


Date.prototype.toShowString = function () {
    var month = '' + (this.getMonth() + 1),
        day = '' + this.getDate(),
        year = this.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    var date = [year, month, day].join('.');
    return date + " " + this.toAmPm();
};

String.prototype.newLine = function () {
    return this.replace(/\n/g, '<br>');
};
