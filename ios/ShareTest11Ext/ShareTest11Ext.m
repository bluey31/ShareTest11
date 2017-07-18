//
//  ShareTest11Ext.m
//  ShareTest11Ext
//
//  Created by Brendon Warwick on 17/07/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ReactNativeShareExtension.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface ShareTest11Ext: ReactNativeShareExtension @end

@implementation ShareTest11Ext

RCT_EXPORT_MODULE();

- (UIView *)shareView {
  NSURL *reactCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  RCTRootView *shareView = [[RCTRootView alloc] initWithBundleURL:reactCodeLocation
                                                       moduleName:@"ShareTest11Ext"
                                                initialProperties:nil
                                                    launchOptions:nil];
  shareView.backgroundColor = [UIColor clearColor];
  return shareView;
}

@end

