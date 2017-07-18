//
//  AppDelegate.swift
//  ShareTest11
//
//  Created by Brendon Warwick on 17/07/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  
  var window: UIWindow?
  var bridge: RCTBridge!
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions:[UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    
    let jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL( forBundleRoot: "index.ios", fallbackResource: nil)!
    
    let rootView = RCTRootView(bundleURL:jsCodeLocation, moduleName: "ShareTest11", initialProperties: nil, launchOptions:launchOptions)
    
    self.bridge = rootView?.bridge
    
    let rootViewController = ViewController()
    
    rootViewController.view = rootView
    
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.window?.rootViewController = rootViewController
    self.window?.makeKeyAndVisible()
    
    application.setMinimumBackgroundFetchInterval(UIApplicationBackgroundFetchIntervalMinimum);
    
    return true
  }
  
  func application(_ application: UIApplication, performFetchWithCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    //self.bridge.eventDispatcher().sendAppEvent( withName: "onWakeUp", body: {})
    //completionHandler(.newData)
  }
  
  func applicationWillResignActive(_ application: UIApplication) {}
  func applicationDidEnterBackground(_ application: UIApplication) {}
  func applicationWillEnterForeground(_ application: UIApplication) {}
  func applicationDidBecomeActive(_ application: UIApplication) {}
  func applicationWillTerminate(_ application: UIApplication) {}
}

