'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ca851184c95f0eb488fcb2c6768e093a",
"assets/AssetManifest.bin.json": "1dc7b7da259ed53219290491c7e41529",
"assets/assets/file/bulk_import_template.xlsx": "416b53042020a5417fa5d07d32deb678",
"assets/assets/icons/afterNoon.png": "c7cb2b67f76ffe30285cbf7db1eac0c8",
"assets/assets/icons/bed_icon.png": "3f130a4c6688aaac9ee539bcc78b0b13",
"assets/assets/icons/block.png": "e9348c29633c11af7a50636b99d96b36",
"assets/assets/icons/breakFast.png": "e618b7f249769d6295f4a28bdc37b994",
"assets/assets/icons/call.png": "d6c19871b389fda3d07102cb888805a0",
"assets/assets/icons/contact.png": "ce52c27c00bdbf7c4e5772469dd39e33",
"assets/assets/icons/date.png": "0d7de485fee43dcda7e54ab7f8ddae54",
"assets/assets/icons/dinner.png": "67e4f7edf803f1799e394f647080f85d",
"assets/assets/icons/done.png": "835d7a4e9a7c2190dc71ef8abfd7debb",
"assets/assets/icons/editProfile.png": "9f3542d7cd9bd4688d7bee0dfff8e69e",
"assets/assets/icons/email.png": "ad33fa0ab7f1bd31e1bccd3e134f8ce5",
"assets/assets/icons/food.png": "bc156010ce0f7fe091908e8e6e9d1da3",
"assets/assets/icons/food_access.png": "83ab9cafa64c1f5142f2275243209aa4",
"assets/assets/icons/Frame.png": "690501addffb9f1a0a37c85fb2deaa0d",
"assets/assets/icons/home.png": "25f12d3e23b5e2a02cda2bbcc677cf92",
"assets/assets/icons/ic_launcher.png": "ae09f793879c28df66a58558332f9117",
"assets/assets/icons/issue.png": "71cbb38ba5e075a231a865d67ff45f4b",
"assets/assets/icons/location.png": "e65c84b79341a95bfa1ad9efe74df898",
"assets/assets/icons/payment.png": "690501addffb9f1a0a37c85fb2deaa0d",
"assets/assets/icons/person.png": "69bee5d911a383d73d9010298008e53e",
"assets/assets/icons/repair.png": "dcb65a469023a99c32a8f508e7fa32c5",
"assets/assets/icons/review_icon.jpg": "753a0ea96fc7be66032c22335e6c940d",
"assets/assets/icons/rupee.png": "df95d406ee1d7c35d33a19e08bad66fd",
"assets/assets/icons/sharing.png": "1f3071ed89296c5d42cd9b3076af52e6",
"assets/assets/icons/splash.json": "55a1449988988c59c86532898c724435",
"assets/assets/icons/status.png": "db067e7bf0d9c04839d902fea5be3304",
"assets/assets/icons/time.png": "cf9ed519ce3a99c9da95faf8dd9abd7c",
"assets/assets/icons/wallet.png": "d00a074cedcfb6e2f871d9773c369f2a",
"assets/assets/icons/washing_machine.png": "b7b862a1a2746d44e924a5173b632865",
"assets/assets/icons/work.png": "cc2a20f4444031f05796681b4793e468",
"assets/assets/image/female.png": "14d86c6566f9e47c62d0d4c395125759",
"assets/assets/image/ic_launcer.jpg": "9cfc1487010d6e908823c45e4dedfc2f",
"assets/assets/image/male.jpg": "62edeac1105a7febf4d9490bc99e5181",
"assets/assets/image/room_not_available.png": "4bb933995bfdcba98f47ff9f35ef9106",
"assets/FontManifest.json": "aed2b02323ee1c15e32a18f07088b8e3",
"assets/fonts/MaterialIcons-Regular.otf": "8bb4276e6208274565efc87b513d5168",
"assets/NOTICES": "a2d6d3f982f023bb766c033026fbc6ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "4a4a0e6258df268959212e2275e2c556",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "b90c0128bad98d0c2ad443563a172437",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50184863d1b5df97f87b2817cb8be6a9",
"/": "50184863d1b5df97f87b2817cb8be6a9",
"main.dart.js": "2760eb51778e859e5242850caceca785",
"manifest.json": "09e756b9ed11503c06c6b421934753fc",
"version.json": "936e3ad3f946ad3e9a908c7bc0597c24"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
