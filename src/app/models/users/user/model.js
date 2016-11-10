"use strict";
var User = (function () {
    function User(_id, username, email, dateTimePref, _avatar, _userRole, warnings, dp, kp, donated, achievements, activeTime, lastLogin, creation) {
        this.username = username;
        this.email = email;
        this.dateTimePref = dateTimePref;
        this._avatar = _avatar;
        this._userRole = _userRole;
        this.warnings = warnings;
        this.dp = dp;
        this.kp = kp;
        this.donated = donated;
        this.achievements = achievements;
        this.activeTime = activeTime;
        this.lastLogin = lastLogin;
        this.creation = creation;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=model.js.map