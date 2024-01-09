let headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("JCookie") != undefined) {
    if ($prefs.valueForKey("JCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "JCookie");
      if (!cookie) {
        $notify("更新机场Cookie失败！", "", "");
      } else {
        $notify("更新机场Cookie成功！", "", "");
      }
    }
  } else {
    let cookie = $prefs.setValueForKey(headerCookie, "JCookie");
    if (!cookie) {
      $notify("首次写入机场Cookie失败！", "", "");
    } else {
      $notify("首次写入机场Cookie成功！", "", "");
    }
  }
}

$done({});
