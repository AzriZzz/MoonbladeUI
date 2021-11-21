import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export interface SwitchColorProps {
  /** A colorToken to change color theme of the dropdown */
  colorToken:
    | 'moongray'
    | 'moonred'
    | 'moonyellow'
    | 'moongreen'
    | 'moonblue'
    | 'moonindigo'
    | 'moonpurple'
    | 'moonpink';
}

/** A dropdown integate with HeadlessUi and Tailwind */
export const Dropdown = ({ colorToken = 'moonpurple' }: SwitchColorProps) => {
  const bgColor = `bg-${colorToken}`;

  const colorSwitch = (colorToken: string) => {
    return colorToken === 'moongray'
      ? 'bg-moongray'
      : colorToken === 'moonred'
      ? 'bg-moonred'
      : colorToken === 'moonyellow'
      ? 'bg-moonyellow'
      : colorToken === 'moongreen'
      ? 'bg-moongreen'
      : colorToken === 'moonblue'
      ? 'bg-moonblue'
      : colorToken === 'moonindigo'
      ? 'bg-moonindigo'
      : colorToken === 'moonpurple'
      ? 'bg-moonpurple'
      : colorToken === 'moonpink'
      ? 'bg-moonpink'
      : 'bg-moonpurple';
  };

  return (
    <div className="w-56 text-right top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md ${colorSwitch(
              colorToken
            )} hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            Options
            <ChevronDownIcon
              className="w-5 h-5 ml-2 mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? `${bgColor} text-white` : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 hover:${bgColor} text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                        color={bgColor}
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? `${bgColor} text-white` : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 hover:${bgColor} text-sm`}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                        color={bgColor}
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="w-5 h-5 mr-2 text-green-600"
                        aria-hidden="true"
                      />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? `${bgColor} text-white` : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 hover:${bgColor} text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                        color={bgColor}
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? `${bgColor} text-white` : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 hover:${bgColor} text-sm`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? `${bgColor} text-white` : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 hover:${bgColor} text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                        color={bgColor}
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

function EditInactiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#111827"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill={props.color}
        stroke="#FFFFFF"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#111827"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#111827"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="bg-moonred"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="bg-moonred"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#111827"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#111827"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#111827" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="bg-moonred"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="bg-moonred"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#111827" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#111827" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#111827" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#111827"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#111827" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#111827" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="bg-moonred"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
  );
}
