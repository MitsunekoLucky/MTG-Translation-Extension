var root1 = "https://khrysystem.dev/mtg-translated/";
var root2 = "https://assets.mist-train-girls.com/production-client-web/144/res/raw-assets/";

console.log("penis");

const imagelist = 
[
  "",
  "04/04446980-592c-4c96-945c-3f531b049163.png",
"04/04d8d86d-a29b-49b3-9749-edafe6a84238.png",
"09/09e8ffb0-4de1-4de9-aa07-5b2a9eaca16a.png",
"0c/0c5fadae-74fe-4bd8-aea6-2746967a2b97.png",
"0d/0d7990b7-1170-435b-b08a-d86d35d6c3c0.png",
"12/1211f68d-335f-46cf-a721-f905a0e541de.png",
"16/16301fa8-e4fe-4bc9-8aea-14dbed55853c.png",
"16/16cc0bbd-a115-4ad4-b080-add358bd5cbe.png",
"19/190ede25-e258-469c-a07e-cc7ed20acda8.png",
"1e/1e756a76-695e-477d-8647-b2a0ef378a1e.png",
"22/22d75978-4b37-4a08-808d-6c6329e799b4.png",
"24/2431bd03-eb25-45cb-8b8b-93f5400180cc.png",
"2a/2a45c59d-bb40-4e51-92b2-399148aa3523.png",
"35/35be9fdb-0603-497c-974d-9bc9fedf620c.png",
"3b/3b3e2bcc-d466-422a-adf0-a3f412113ad1.png",
"3d/3dae770b-fe6d-41f9-81e0-d65ef051c0ae.png",
"40/40be6766-2921-489f-bf31-3e20485a61d5.png",
"44/4480e3d0-344c-4891-9e97-b1346e407d85.png",
"44/44fd7c78-3e58-4b54-befb-77f7d2c99789.png",
"49/4927985a-cc1b-4c6e-8133-d01629cb54d6.png",
"4b/4b586393-0282-4649-9fc1-cd18df090734.png",
"4d/4d16946a-03cf-4662-8c31-53c05cf7ec59.png",
"4d/4d3747ec-f8a4-4530-8e53-a2a9f35872c2.png",
"4e/4ea13c4c-d834-4a5c-b0bb-7489d2b37d8c.png",
"52/529031aa-7160-40e5-a5b1-9ec5b67ced53.png",
"55/5599d11c-2e27-47e0-bcfd-795bbeab0e2e.png",
"56/56555307-94d0-49d9-814a-56e00c399ad5.png",
"57/5732211c-77d8-436f-a38a-97eee71b743f.png",
"59/5988b576-e51a-45dd-9016-757344b3e068.png",
"5a/5a6e9c7e-4adb-4104-8da9-04d9dcab303f.png",
"5a/5add50b5-313a-46ef-928b-edd2866fbeed.png",
"5c/5c876217-a3de-4a97-ae48-99fc3b6b4590.png",
"5c/5cb8f831-b76a-4512-84c5-5814c4a6ea05.png",
"5d/5dba8d6f-9592-4bb4-9d1f-3f20873db301.png",
"5f/5f9874d8-bf4c-49d8-8a06-1c80068d046e.png",
"62/62050b58-69ab-48a1-813e-dd5eaa77870e.png",
"67/67c814e8-1fa9-4c19-94d9-a85bd9d74479.png",
"68/68cfd729-c969-4e41-a19a-447a4108bbbb.png",
"6e/6e915993-52df-46f7-a801-d9a721262a2e.png",
"72/725b120e-b7a0-491c-a9a4-4ba9ec746ff2.png",
"7d/7d7f4c89-242f-4ae3-ac1c-195ec04d5607.png",
"81/819dba33-f967-49b8-87c8-316fd8581f92.png",
"82/825bf98c-bc2b-454c-97d9-1a07931bd7ed.png",
"85/85ce50da-4a9b-4e32-a8b2-a91c847b447e.png",
"87/872e9330-6eb8-434a-b3b3-fbc2bf0d12b9.png",
"8a/8a1b9203-5900-45ac-b701-030e7598e04b.png",
"91/91a3db7a-612a-4e67-a49e-52f803fd7966.png",
"93/9387e115-cf9c-4f2e-bc6d-43bb749f7001.png",
"9b/9b435937-4273-4bef-95d4-c2d3cc66070c.png",
"9c/9ca9d278-4621-4af5-84f8-077c20bb2721.png",
"9c/9cbe1d5f-598e-4b8d-a3a2-c4a5934ac7f1.png",
"9d/9d65559c-4ce1-4557-8658-bd29ac162926.png",
"9e/9e6e5f62-6f54-48ee-b669-4f7c29a0bea3.png",
"a3/a3221da1-a23c-4610-88ff-8144eed07803.png",
"aa/aa24caf6-97d1-4c77-ba31-fcc754e291c5.png",
"ac/ac9acf76-b849-43ad-babc-86ad02ff450c.png",
"b0/b034cbbb-54c6-4852-ab38-55e5a23ec4ec.png",
"b6/b63f5b6b-62cd-434b-89c3-ec0dc268b9bc.png",
"b8/b802b0f4-ff2c-41d5-93fc-8eb44fdf56e2.png",
"b9/b9f0a5c3-82fa-40dd-89eb-9f430591a8db.png",
"bd/bd2ce8d4-efad-43f4-a162-2f855894a5dd.png",
"be/be234ed3-e834-41d5-934a-c71e4d2508b5.png",
"c1/c131b726-dfdf-48bf-98c8-3ee2bcb31ad5.png",
"c2/c208c2a5-59bf-4b7c-ac1a-5c9c729f6e17.png",
"c7/c755a802-cf95-4338-a057-6006d9d846a5.png",
"c8/c84dd025-d8f1-4474-b905-0f8de9ae0bd7.png",
"c9/c9b570f2-936e-4fff-ba72-8a2f243ca02b.png",
"d0/d0eb6902-488a-4200-8289-9783857feb41.png",
"d8/d8466f05-0e0e-4aa8-8af1-6ae724204edf.png",
"da/da90d327-3810-416e-990f-ee924464638b.png",
"db/dbcd5278-091a-4872-b509-f589793a0a89.png",
"df/dfe6e87c-d79e-4fe1-a2f0-7ccf1a01de9b.png",
"e2/e22cc304-7736-4146-9b5b-e2785839f4b4.png",
"e3/e30d9424-cfe2-44ae-a191-de71385ba6f3.png",
"e4/e4025e52-b089-4ec8-83ef-0cba8ee5d3b9.png",
"e9/e9fa1b10-8617-4389-adc0-dc54cde77785.png",
"ea/ea4aa06b-faba-4f3c-8c7d-a1a9c3f46c93.png",
"ec/ec60780e-e1ea-446c-9c81-1f9f822fe0e6.png",
"f7/f73613bc-69f1-407a-b72b-6067d260cec9.png",
"f9/f9ec5763-856d-4745-8240-d6cf261f75d7.png",
""
];

for (let i = 1; i <= 80; i++) 
{
  chrome.declarativeNetRequest.updateDynamicRules(
    {      
      addRules:[{
       "id": i,
       "priority": 1,
       "action": { "type": "redirect", "redirect":{ "url": root1 + "img/" + imagelist[i].split("/").pop()} },
       "condition": {"urlFilter": root2 + imagelist[i]}
      },
      ],
      removeRuleIds: [i]
    },       
  );
  console.log(root2 + imagelist[i])
  console.log(root1 + "img/" + imagelist[i].split("/").pop())
};