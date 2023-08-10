### AndroidManifest.xml
```xml
<uses-permission>
    <!--
    Internet permissions do not affect the `permission_handler` plugin, but are required if your app needs access to
    the internet.
    -->
    <uses-permission android:name="android.permission.INTERNET"/>

    <!-- Permissions options for the `contacts` group -->
    <uses-permission android:name="android.permission.READ_CONTACTS"/>
    <uses-permission android:name="android.permission.WRITE_CONTACTS"/>
    <uses-permission android:name="android.permission.GET_ACCOUNTS"/>

    <!-- Permissions options for the `storage` group -->
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

    <!-- Permissions options for the `camera` group -->
    <uses-permission android:name="android.permission.CAMERA"/>

    <!-- Permissions options for the `sms` group -->
    <uses-permission android:name="android.permission.SEND_SMS"/>
    <uses-permission android:name="android.permission.RECEIVE_SMS"/>
    <uses-permission android:name="android.permission.READ_SMS"/>
    <uses-permission android:name="android.permission.RECEIVE_WAP_PUSH"/>
    <uses-permission android:name="android.permission.RECEIVE_MMS"/>

    <!-- Permissions options for the `phone` group -->
    <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
    <uses-permission android:name="android.permission.CALL_PHONE"/>
    <uses-permission android:name="android.permission.ADD_VOICEMAIL"/>
    <uses-permission android:name="android.permission.USE_SIP"/>
    <uses-permission android:name="android.permission.READ_CALL_LOG"/>
    <uses-permission android:name="android.permission.WRITE_CALL_LOG"/>
    <uses-permission android:name="android.permission.BIND_CALL_REDIRECTION_SERVICE"/>

    <!-- Permissions options for the `calendar` group -->
    <uses-permission android:name="android.permission.READ_CALENDAR" />
    <uses-permission android:name="android.permission.WRITE_CALENDAR" />

    <!-- Permissions options for the `location` group -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />

    <!-- Permissions options for the `microphone` or `speech` group -->
    <uses-permission android:name="android.permission.RECORD_AUDIO" />

    <!-- Permissions options for the `sensors` group -->
    <uses-permission android:name="android.permission.BODY_SENSORS" />

    <!-- Permissions options for the `accessMediaLocation` group -->
    <uses-permission android:name="android.permission.ACCESS_MEDIA_LOCATION" />

    <!-- Permissions options for the `activityRecognition` group -->
    <uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />

    <!-- Permissions options for the `ignoreBatteryOptimizations` group -->
    <uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS" />

    <!-- Permissions options for the `bluetooth` group -->
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADVERTISE" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />

    <!-- Permissions options for the `manage external storage` group -->
    <uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />

    <!-- Permissions options for the `system alert windows` group -->
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />

    <!-- Permissions options for the `request install packages` group -->
    <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />

    <!-- Permissions options for the `access notification policy` group -->
    <uses-permission android:name="android.permission.ACCESS_NOTIFICATION_POLICY"/>
</uses-permission>
    
```