let headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("jjCookie") != undefined) {
    if ($prefs.valueForKey("jjCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "jjCookie");
      if (!cookie) {
        $notify("更新几🐔Cookie失败！", "", "");
      } else {
        $notify("更新几🐔Cookie成功！", "", "");
      }
    }
  } else {
    let cookie = $prefs.setValueForKey(headerCookie, "jjCookie");
    if (!cookie) {
      $notify("首次写入几🐔Cookie失败！", "", "");
    } else {
      $notify("首次写入几🐔Cookie成功！", "", "");
    }
  }
}

$done({});
