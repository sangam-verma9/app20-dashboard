import React, { useState, useEffect } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const ShowList = () => {
    const initialData = [
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/e684511b-5fc4-47bc-abe4-f7096bccd3df-Screenshot_2025-04-14-00-21-37-21.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/beb5bf7f-3c3a-4fff-9390-3249bbce9743-Screenshot_20250414_005508.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/9e6c7d33-a9c7-4597-84e3-d9221119fdd4-Screenshot_20250414-010332.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/17096fc0-a3aa-4fe0-998a-a21de257c294-Screenshot_20250414-061114_Google_Play_Store.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/bbad1163-42af-41e9-8e93-d8d7cb066e6c-Screenshot_2025-04-14-06-53-_FbdDxO3.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/dee2d548-b733-4d54-86e0-c89fe5ca8a02-Screenshot_2025.04.14_07.04.36.164.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/cbbfddde-cb78-410c-a283-4d30ecd094b1-Screenshot_20250414_071040.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/0f69bcc7-f1f3-4072-87da-4e866a39cd60-Screenshot_20250414_012928.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/c6ffdf44-c291-49ca-b793-7d847245cef9-Screenshot_2025-04-14-07-31-_blSoQrv.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/7ee8f306-9346-49ae-8050-3fd30a710bec-Screenshot_20250414_074759_Google_Play_Store.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/704adc15-ec33-46ab-9cbb-808729f11f29-Screenshot_2025.04.14_07.34.00.524.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/8f016088-30ac-4e10-8c39-12eb049169a5-Screenshot_2025-04-14-08-23-_G3JvjVn.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/687b9985-e5d1-45ea-b82e-4fd324899561-Screenshot_20250414-082433.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/6d9760ce-59ee-4b5e-b47e-f37e84df8ca9-Screenshot_2025.04.14_08.33.35.083.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/dd9fddd0-febd-4d1f-ab5e-e09cea7fd53a-Screenshot_20250414-084723.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/0159f18f-f46a-414d-b884-9c292c188145-Screenshot_20250414_090000.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/9824eb04-9ff8-493c-8369-2ed4d34339ab-Screenshot_2025-04-14-09-11-_S15aD2x.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/28df9047-621f-4b96-ae2a-07f98e2c54f4-Screenshot_2025-04-14-09-30-_CH0btSQ.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/469b4375-3b91-495b-a2a6-4e590167c7d9-Screenshot_2025-04-14-09-31-31-71_b5a5c5cb02_oTlUVda.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/ac326c7e-c9e7-45cd-b7d2-98ad7cb89dab-Screenshot_20250414_093732_Google_Play_Store.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/9dcea0bb-760a-4d62-a947-090aedf223aa-Screenshot_2025-04-14-09-42-_3wfdgj0.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/75e326a1-c730-4ad8-8006-3c95b0356638-Screenshot_20250414_100713.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/f836c8b6-f638-4ad5-a489-f00b3e7c64b6-Screenshot_20250414_102125_Google_Play_Store.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/e7f77ea7-950d-4b35-9a3f-dae717efff22-Screenshot_2025-04-14-10-23-24-28_b5a5c5cb02_7KsMC42.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/80fb252c-1fe6-4888-97e6-d77e6066bbfa-Screenshot_20250414_102815.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/2b9e38a5-ba6d-4edf-ba53-1b4e567aecf1-Screenshot_20250414_102930.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/2f8e387a-d42d-4e5a-af4e-7f65eb6cdb89-IMG_20250414_103256_317.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/1f87b3d3-c5ec-417d-a6b2-2778fd09a66e-IMG_20250414_105458_658.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/78bb7b37-4b60-4547-a6a2-9de9a9199200-Screenshot_2025-04-14-11-04-50-27_b5a5c5cb02_3K4aWS1.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/65d849f9-cfdb-458e-9a92-37be591466f8-Screenshot_20250414-110936.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/a42b0dc8-3eb5-4ea8-a909-d202875ad917-Screenshot_2025-04-14-11-18-07-45_b5a5c5cb02_sNW01PZ.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/d14d6af5-99d6-4e1e-bce8-363cb2b5ea3c-Screenshot_20250414-112048.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/e16f9ce2-4ecf-4a75-9a8f-e941f6b8b767-Screenshot_20250414_113010_Google_Play_Store.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/b208cae9-0889-4338-b8e4-35191c2443ca-Screenshot_2025-04-14-11-42-07-48.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/e8216485-136a-4e7e-9f3f-ad0630aa2007-Screenshot_2025-04-14-11-52-30-09.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/c95d9876-5d71-447e-bf89-666a5e574b25-Screenshot_20250414-115421.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/f8495ab6-ad40-417e-81fd-3d07742dd727-Screenshot_20250414_115526.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/a51373a3-156f-4840-8b62-0464978cadce-Screenshot_2025-04-14-11-56-41-55.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/301d7203-5834-4cbf-9882-0ba68a616621-Screenshot_20250414_115809.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/d9340d48-955f-4196-bc6f-cacbb874b632-Screenshot_20250414-115859_Google_Play_Store.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/8969118c-7599-44ae-9747-5d375cf5ea82-Screenshot_20250414_115949.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/85c6c1b7-f5d5-40ea-bf69-409c32a965b9-Screenshot_20250414_120111.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/1cd56a09-a010-41a9-b839-6fdc13680b37-Screenshot_20250414_120348_Google_Play_Store.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/e61c8c58-d2a3-4f87-9837-4c51f4ae20b5-Screenshot_20250414-120356.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/7ae88804-71bd-4d94-8a63-b3658be34e2d-Screenshot_20250414_120123.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/949ac1bb-7e60-4428-977a-e9ed70b6c2df-Screenshot_20250414-120815.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/92cce25c-7175-4006-a424-65071429302d-Screenshot_2025-04-14-12-09-22-94.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/1411154f-887d-4471-ab0f-5f112c1b636b-Screenshot_2025-04-14-12-09-_KrIBBEY.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/28a22c9b-7c6e-4d94-9776-6c56f73cfdfb-Screenshot_20250414-121514_Google_Play_Store.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/0e387b3b-746c-4e91-b03f-91d0d2d1a4e0-Screenshot_20250414_121430.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/660badc2-844d-44bf-9617-99354e68c8da-Screenshot_20250414_121726.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/ec29f28e-135b-494d-b6cc-81e764e5c61e-Screenshot_2025-04-14-12-17-57-24_b5a5c5cb02_V4JDbqy.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/272b9194-92b3-4208-9922-9dea5abb4390-Screenshot_2025-04-14-12-18-_xqisXTn.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/0dc3164d-fc99-4878-9058-467e9708269a-Screenshot_2025-04-14-12-19-09-29_b5a5c5cb02_M2SrCuV.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/fe118ab9-37bc-4635-af4b-99b8dc629ef8-Screenshot_2025-04-14-12-20_piZbKtY.android.incallui.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/54d2db7f-9a0d-4331-8039-e7b0bc75f549-Screenshot_20250414-122350.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/bde872ea-dd8b-43c6-ae02-7e13a1a8fa00-Screenshot_2025-04-14-12-21-_MUq2NeT.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/15d3d9e6-2ff7-415a-a70d-3bbe576aceb3-Screenshot_20250414-122826.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/8c2bd337-8f6e-411e-bc57-e02e1ee1a8e2-Screenshot_2025-04-14-12-30-45-31_b5a5c5cb02_OtrdnYb.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/5e47f70f-fcfb-4823-820d-a4da2d6aee8b-Screenshot_20250414-123519.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/02a74382-b7e7-4eb1-a589-e4b091291cc4-Screenshot_2025-04-14-12-36-59-76_b5a5c5cb02_WTvw22U.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/6281251b-8ae0-4d2f-96de-bdfd7b8990de-Screenshot_2025-04-14-12-38-_HnTAKBe.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/1f615035-8148-4986-9e69-35acc3b1eb91-Screenshot_20250414-123809.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/6f751207-584c-4953-8323-ae38a9037aed-Screenshot_20250414_124106.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/f226ff0b-e5b7-480d-bb09-60f0eed323e6-Screenshot_2025-04-14-12-43-48-66_b5a5c5cb02_fFLRZhC.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/39c9d80d-3f1e-4558-9e9d-52ae6fb5f145-Screenshot_2025-04-14-12-50-14-82_b5a5c5cb02_SW8DrOo.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/4bcbd7be-ba8b-4099-aaac-7a7a0597a172-Screenshot_2025-04-14-12-57-47-87_b5a5c5cb02_C0V3MPF.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/f407f85c-3632-477b-af4a-e3df9200afb1-Screenshot_2025-04-14-12-59-38-01_b5a5c5cb02_RZ8PaU1.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/be518175-8967-415e-bf58-f4383ae6312b-Screenshot_20250414-130024.png"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/bc4cd557-a238-4f8d-9ede-63f56184e033-Screenshot_2025-04-14-13-01-_4YNwcHd.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/cc22e7f6-57a2-415e-86bd-fa65ff278abc-Screenshot_2025-04-14-13-05-42-55_b5a5c5cb02_1vYDp8K.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/6b15fe0a-37b9-468d-8a48-81dcf8fb7808-Screenshot_2025-04-14-13-07-_WVGxTSF.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/2189504e-9670-4bbb-aca4-8e84f118578b-Screenshot_2025-04-14-13-11-25-27_b5a5c5cb02_QVb12kc.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/998f2783-4b4a-4c80-a952-27259195533b-IMG_20250414_131059_714.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/c1b78a4f-d10c-4ddb-abe0-03cc5558363a-Screenshot_2025-04-14-13-12-16-98_b5a5c5cb02_Zxn9xMn.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/745e8e7b-8b6e-4fe4-a121-7160dc47efce-Screenshot_2025-04-14-13-11-_kt1LJ38.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/212c0425-ffac-44e9-b13d-b0c0b384de9d-Screenshot_2025-04-14-13-13-_P0EcFci.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/bcaa0151-819a-4add-830c-da322e98b957-Screenshot_2025-04-14-13-19-_qXUbHVK.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/ae85d7e3-de40-4f4e-9117-3a60f86a287f-Screenshot_2025-04-14-13-20-_17d32c4.android.vending.jpg"
        },
        {
            "imageLink": "https://app20userbucket.s3.amazonaws.com/images/b5cc262c-5302-4f67-9efc-d41d330bb52a-Screenshot_20250414_132310.jpg"
        },
    ]

    const [imageData, setImageData] = useState([]);
    const [chunkedData, setChunkedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerRow = 9;
    const rowsPerPage = 4;
    const totalPages = Math.ceil(initialData.length / (imagesPerRow * rowsPerPage));

    useEffect(() => {
        const dataWithStatus = initialData.map(item => ({
            ...item,
            status: "pending"
        }));
        setImageData(dataWithStatus);
    }, []);

    useEffect(() => {
        const chunks = [];
        for (let i = 0; i < imageData.length; i += imagesPerRow) {
            chunks.push(imageData.slice(i, i + imagesPerRow));
        }
        setChunkedData(chunks);
    }, [imageData]);

    const handleImageAction = (rowIndex, colIndex, action) => {
        const newData = [...imageData];
        const actualRowIndex = rowIndex + (currentPage - 1) * rowsPerPage;
        const flatIndex = actualRowIndex * imagesPerRow + colIndex;

        if (flatIndex < newData.length) {
            newData[flatIndex] = {
                ...newData[flatIndex],
                status: action
            };
            setImageData(newData);
        }
    };

    const handleRowAction = (rowIndex, action) => {
        const newData = [...imageData];
        const actualRowIndex = rowIndex + (currentPage - 1) * rowsPerPage;
        const startIndex = actualRowIndex * imagesPerRow;
        const endIndex = Math.min(startIndex + imagesPerRow, imageData.length);

        for (let i = startIndex; i < endIndex; i++) {
            newData[i] = { ...newData[i], status: action };
        }

        setImageData(newData);
    };

    const handleSave = () => {
        console.log("Saving image statuses:", imageData);
        alert("Data saved successfully!");
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pages = [];
        const maxPageButtons = 5;
        let startPage = 1;

        if (totalPages > maxPageButtons) {
            const middlePoint = Math.ceil(maxPageButtons / 2);

            if (currentPage > middlePoint) {
                startPage = Math.min(currentPage - middlePoint + 1, totalPages - maxPageButtons + 1);
            }
        }

        const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return (
            <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                    <button
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                    >
                        Prev
                    </button>

                    {pages.map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                    >
                        Next
                    </button>
                </nav>
            </div>
        );
    };

    const StatusBadge = ({ status }) => {
        const badgeClasses = {
            accepted: "bg-green-100 text-green-800 border-green-200",
            rejected: "bg-red-100 text-red-800 border-red-200",
            pending: "bg-yellow-100 text-yellow-800 border-yellow-200"
        };

        const displayStatus = status || "pending";

        return (
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${badgeClasses[displayStatus]}`}>
                {displayStatus.charAt(0).toUpperCase() + displayStatus.slice(1)}
            </span>
        );
    };

    // Get the current rows to display based on pagination
    const currentRows = chunkedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Image Review</h1>

            {currentRows.map((row, rowIndex) => (
                <div key={rowIndex} className="mb-8">
                    <div className="flex gap-4 mb-2">
                        {row.map((item, colIndex) => (
                            <div
                                key={colIndex}
                                className={`w-[150px] border-3 rounded-lg  overflow-hidden shadow-md ${item.status === "pending"
                                    ? "border-[#000000]"
                                    : item.status === "accepted"
                                        ? "border-[#00ff00]"
                                        : "border-[#ff0000]"
                                    }`}
                            >
                                <div className="relative h-[87%]">
                                    <img
                                        src={item.imageLink}
                                        alt={`Image ${((currentPage - 1) * rowsPerPage + rowIndex) * imagesPerRow + colIndex + 1}`}
                                        className="w-full h-[100%]"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/api/placeholder/320/240";
                                        }}
                                    />
                                </div>
                                <div className="flex justify-center items-center p-1 bg-white h-[10%]">
                                    <div className="grid grid-cols-2 gap-2 h-[100%] w-[100%]">
                                        <button
                                            onClick={() => handleImageAction(rowIndex, colIndex, "accepted")}
                                            className={`flex justify-center item-center py-2 px-4 rounded  ${item.status === "accepted"
                                                ? "bg-green-600 text-white"
                                                : "bg-gray-100 hover:bg-green-100"
                                                }`}
                                        >
                                            <IoMdCheckmark />
                                        </button>
                                        <button
                                            onClick={() => handleImageAction(rowIndex, colIndex, "rejected")}
                                            className={`flex justify-center item-center py-2 px-4  rounded ${item.status === "rejected"
                                                ? "bg-red-600 text-white"
                                                : "bg-gray-100 hover:bg-red-100"
                                                }`}
                                        >
                                            <RxCross2 />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end gap-3 mt-2">
                        <span className="text-sm font-medium text-gray-700 self-center">
                            Row {(currentPage - 1) * rowsPerPage + rowIndex + 1}:
                        </span>
                        <button
                            onClick={() => handleRowAction(rowIndex, "accepted")}
                            className="bg-green-50 hover:bg-green-100 text-green-700 py-1 px-3 rounded border border-green-200 text-sm"
                        >
                            Accept All
                        </button>
                        <button
                            onClick={() => handleRowAction(rowIndex, "rejected")}
                            className="bg-red-50 hover:bg-red-100 text-red-700 py-1 px-3 rounded border border-red-200 text-sm"
                        >
                            Reject All
                        </button>
                    </div>
                </div>
            ))}

            {renderPagination()}

            {imageData.length > 0 && (
                <div className="mt-8 border-t pt-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-medium">Summary</h3>
                            <div className="flex gap-4 mt-2 text-sm">
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span>Accepted: {imageData.filter(img => img.status === "accepted").length}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <span>Rejected: {imageData.filter(img => img.status === "rejected").length}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <span>Pending: {imageData.filter(img => img.status === "pending").length}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleSave}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium"
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowList;