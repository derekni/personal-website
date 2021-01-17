import { ReactElement } from 'react';

const privacy = (): ReactElement => {
  return (
    <div className="">
      <div className="bg-gray-500 min-h-full text-4xl text-center text-white font-semibold p-5">
        Privacy Policy
      </div>
      <div className="bg-gray-50 p-12">
        <div className="text-xl font-semibold mb-1">Personal data</div>
        <div className="text-lg mb-4">Minto does not collect any data.</div>
        <div className="text-xl font-semibold mb-1">Third party services</div>
        <div className="text-lg mb-1">
          Minto uses Chrome Storage Sync API to store user settings, mints,
          blocked sites, and work status. Minto uses Chrome Tabs API (with user
          permission) to redirect specific sites when the user is working.
        </div>
      </div>
    </div>
  );
};

export default privacy;
